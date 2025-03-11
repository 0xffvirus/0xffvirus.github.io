import { useEffect, useRef } from "react";
import { FlutterOriginal, NextjsOriginal, PythonOriginal, CsharpOriginal, UnityOriginal, FigmaOriginal, BashOriginal, GodotOriginal, JavaOriginal, GitOriginal } from 'devicons-react';



export function SkillsScroll() {
    const skills = [
        { icon: <FlutterOriginal size={48} />, name: 'Flutter' },
        { icon: <NextjsOriginal size={48} />, name: 'Next.js' },
        { icon: <PythonOriginal size={48} />, name: 'Python' },
        { icon: <CsharpOriginal size={48} />, name: 'C#' },
        { icon: <UnityOriginal size={48} />, name: 'Unity' },
        { icon: <FigmaOriginal size={48} />, name: 'Figma' },
        { icon: <BashOriginal size={48} />, name: 'Bash' },
        { icon: <GodotOriginal size={48} />, name: 'Godot' },
        { icon: <JavaOriginal size={48} />, name: 'Java' },
        { icon: <GitOriginal size={48} />, name: 'Git' },
    ];

    // Duplicate the skills array to create the infinite scroll effect
    const scrollContent = [...skills, ...skills, ...skills];

    return (
        <div className='w-full overflow-hidden py-6 relative bg-background/50 backdrop-blur-sm border-t border-b border-primary/10'>
            {/* Left fade effect */}
            <div className='absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-background to-transparent'></div>

            <div className='skills-scroll-container py-3'>
                <div className='skills-scroll-track flex gap-20 animate-scroll'>
                    {scrollContent.map((skill, index) => (
                        <div
                            key={`${skill.name}-${index}`}
                            className='flex items-center gap-2 px-8 py-2s transition-all duration-300'
                        >
                            {skill.icon}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right fade effect */}
            <div className='absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-background to-transparent'></div>

            <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .skills-scroll-track {
          animation: scroll 30s linear infinite;
          width: fit-content;
        }
        
        .skills-scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}