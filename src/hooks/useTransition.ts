// React
import { useEffect } from 'react';

// Others
import gsap from 'gsap';

const DURATION = 0.8;

function useTransition() {
    // Methods
    const heroEntranceAnimation = () => {
        const heroName0 = document.getElementById('hero-name-0');
        const heroName1 = document.getElementById('hero-name-1');
        const heroTitle0 = document.getElementById('hero-title-0');
        const heroTitle1 = document.getElementById('hero-title-1');
        const heroDescription0 = document.getElementById('hero-description-0');
        const heroDescription1 = document.getElementById('hero-description-1');
        const stripes0 = document.getElementById('stripes-0');
        const stripes1 = document.getElementById('stripes-1');

        gsap.set(
            [
                heroName0,
                heroName1,
                heroTitle0,
                heroTitle1,
                heroDescription0,
                heroDescription1,
                stripes0,
                stripes1
            ],
            { opacity: 0, y: -20 }
        );

        gsap.set([stripes0, stripes1], { opacity: 0 });

        gsap.to(heroName0, { opacity: 1, y: 0, delay: 0 });
        gsap.to(heroName1, { opacity: 1, y: 0, delay: 0 });
        gsap.to(heroTitle0, { opacity: 1, y: 0, delay: 0.25 });
        gsap.to(heroTitle1, { opacity: 1, y: 0, delay: 0.25 });
        gsap.to(heroDescription0, { opacity: 1, y: 0, delay: 0.5 });
        gsap.to(heroDescription1, { opacity: 1, y: 0, delay: 0.5 });
        gsap.to(stripes0, { opacity: 1, delay: 0.5 });
        gsap.to(stripes1, { opacity: 1, delay: 0.5 });
    };

    const lineFullAnimatinon = () => {
        const heroLine2 = document.getElementsByClassName('hero-line-2');

        const skillsLine0 = document.getElementById('skills-line-0');
        const skillsLine1 = document.getElementById('skills-line-1');
        const skillsLine2 = document.getElementById('skills-line-2');
        const skillsLine3 = document.getElementById('skills-line-3');
        const skillsLine4 = document.getElementById('skills-line-4');

        const projectsLine0 = document.getElementById('projects-line-0');
        const projectsLine1 = document.getElementById('projects-line-1');

        const footerLine0 = document.getElementById('footer-line-0');
        const footerLine1 = document.getElementById('footer-line-1');
        const footerLine2 = document.getElementById('footer-line-2');

        const point0 = document.getElementById('point-0');
        const point0Icon = document.getElementById('point-0-icon');
        const point1 = document.getElementById('point-1');
        const point1Icon = document.getElementById('point-1-icon');
        const point2 = document.getElementById('point-2');
        const point2Icon = document.getElementById('point-2-icon');

        const experiencesTag = document.getElementById('experiences-tag');
        const skillsTag = document.getElementById('skills-tag');
        const projectsTag = document.getElementById('projects-tag');
        const footerTag = document.getElementById('footer-tag');

        gsap.set(
            [
                heroLine2,
                skillsLine0,
                skillsLine2,
                skillsLine3,
                projectsLine0,
                projectsLine1,
                footerLine0,
                footerLine2
            ],
            {
                scaleY: 0
            }
        );
        gsap.set([skillsLine1, skillsLine4, footerLine1], { scaleX: 0 });
        gsap.set([point0, point1, point2], { scale: 0 });
        gsap.set(
            [point0Icon, point1Icon, point2Icon, experiencesTag, skillsTag, projectsTag, footerTag],
            { opacity: 0 }
        );

        const timeline = gsap.timeline({
            paused: true
        });

        timeline
            .to(heroLine2, { scaleY: 1, duration: DURATION / 3, ease: 'none' })
            .to(skillsLine0, { scaleY: 1, duration: DURATION - DURATION / 3, ease: 'none' })
            .to(skillsLine1, { scaleX: 1, duration: DURATION, ease: 'none' })
            .to(skillsLine2, { scaleY: 1, duration: DURATION / 8, ease: 'none' })
            .to(skillsLine3, { scaleY: 1, duration: DURATION - DURATION / 8, ease: 'none' })
            .to(skillsLine4, { scaleX: 1, duration: DURATION, ease: 'none' })
            .to(projectsLine0, { scaleY: 1, duration: DURATION / 8, ease: 'none' })
            .to(projectsLine1, { scaleY: 1, duration: DURATION - DURATION / 8, ease: 'none' })
            .to(footerLine0, { scaleY: 1, duration: DURATION / 8, ease: 'none' })
            .to(footerLine1, { scaleX: 1, duration: DURATION / 2, ease: 'none' })
            .to(footerLine2, { scaleY: 1, duration: DURATION / 8, ease: 'none' });

        gsap.to(point0, { scale: 1, duration: DURATION });
        gsap.to(point0Icon, { opacity: 1, delay: 0.5, duration: DURATION });
        gsap.to(point1, { scale: 1, delay: 0.85, duration: DURATION });
        gsap.to(point1Icon, { opacity: 1, delay: 1.5, duration: DURATION });
        gsap.to(point2, { scale: 1, delay: 1.5, duration: DURATION });
        gsap.to(point2Icon, { opacity: 1, delay: 2, duration: DURATION });

        gsap.to(experiencesTag, { opacity: 1, delay: 1, duration: DURATION });
        gsap.to(skillsTag, { opacity: 1, delay: 1.5, duration: DURATION });
        gsap.to(projectsTag, { opacity: 1, delay: 2, duration: DURATION });
        gsap.to(footerTag, { opacity: 1, delay: 2.5, duration: DURATION });

        gsap.to(timeline, {
            time: timeline.duration(),
            duration: timeline.duration(),
            ease: 'ease.in',
            delay: 0
        });
    };

    const lineMinAnimation = () => {
        const heroLine0 = document.getElementsByClassName('hero-line-0');
        const heroLine1 = document.getElementsByClassName('hero-line-1');
        const heroLine2 = document.getElementsByClassName('hero-line-2');

        const skillsLine0 = document.getElementById('skills-line-0');
        const skillsLine1 = document.getElementById('skills-line-1');
        const skillsLine2 = document.getElementById('skills-line-2');
        const skillsLine3 = document.getElementById('skills-line-3');
        const skillsLine4 = document.getElementById('skills-line-4');

        const projectsLine0 = document.getElementById('projects-line-0');
        const projectsLine1 = document.getElementById('projects-line-1');

        const footerLine0 = document.getElementById('footer-line-0');
        const footerLine1 = document.getElementById('footer-line-1');
        const footerLine2 = document.getElementById('footer-line-2');

        const point0 = document.getElementById('point-0');
        const point0Icon = document.getElementById('point-0-icon');
        const point1 = document.getElementById('point-1');
        const point1Icon = document.getElementById('point-1-icon');
        const point2 = document.getElementById('point-2');
        const point2Icon = document.getElementById('point-2-icon');

        const experiencesTag = document.getElementById('experiences-tag');
        const skillsTag = document.getElementById('skills-tag');
        const projectsTag = document.getElementById('projects-tag');
        const footerTag = document.getElementById('footer-tag');

        gsap.set(
            [
                heroLine1,
                heroLine2,
                skillsLine0,
                skillsLine2,
                skillsLine3,
                projectsLine0,
                projectsLine1,
                footerLine0,
                footerLine2
            ],
            { scaleY: 0 }
        );
        gsap.set([heroLine0, skillsLine1, skillsLine4, footerLine1], { scaleX: 0 });
        gsap.set([point0, point1, point2], { scale: 0 });
        gsap.set(
            [point0Icon, point1Icon, point2Icon, experiencesTag, skillsTag, projectsTag, footerTag],
            { opacity: 0 }
        );
        const timeline = gsap.timeline({
            paused: true
        });

        timeline
            .to(heroLine0, { scaleX: 1, duration: DURATION / 3, ease: 'none' })
            .to(heroLine1, { scaleY: 1, duration: DURATION / 10, ease: 'none' })
            .to(heroLine2, { scaleY: 1, duration: DURATION / 9, ease: 'none' })
            .to(skillsLine0, { scaleY: 1, duration: DURATION, ease: 'none' })
            .to(skillsLine1, { scaleX: 1, duration: DURATION, ease: 'none' })
            .to(skillsLine2, { scaleY: 1, duration: DURATION / 10, ease: 'none' })
            .to(skillsLine3, { scaleY: 1, duration: DURATION - DURATION / 10, ease: 'none' })
            .to(skillsLine4, { scaleX: 1, duration: DURATION, ease: 'none' })
            .to(projectsLine0, { scaleY: 1, duration: DURATION / 8, ease: 'none' })
            .to(projectsLine1, { scaleY: 1, duration: DURATION - DURATION / 8, ease: 'none' })
            .to(footerLine0, { scaleY: 1, duration: DURATION / 8, ease: 'none' })
            .to(footerLine1, { scaleX: 1, duration: DURATION / 2, ease: 'none' })
            .to(footerLine2, { scaleY: 1, duration: DURATION / 8, ease: 'none' });

        gsap.to(point0, { scale: 1, delay: 0.35, duration: DURATION });
        gsap.to(point0Icon, { opacity: 1, delay: 1, duration: DURATION });
        gsap.to(point1, { scale: 1, delay: 0.85, duration: DURATION });
        gsap.to(point1Icon, { opacity: 1, delay: 1.5, duration: DURATION });
        gsap.to(point2, { scale: 1, delay: 1.5, duration: DURATION });
        gsap.to(point2Icon, { opacity: 1, delay: 2, duration: DURATION });

        gsap.to(experiencesTag, { opacity: 1, delay: 1, duration: DURATION });
        gsap.to(skillsTag, { opacity: 1, delay: 1.5, duration: DURATION });
        gsap.to(projectsTag, { opacity: 1, delay: 2, duration: DURATION });
        gsap.to(footerTag, { opacity: 1, delay: 2.5, duration: DURATION });

        gsap.to(timeline, {
            time: timeline.duration(),
            duration: timeline.duration(),
            ease: 'ease.in',
            delay: 0
        });
    };

    const cardsAnimation = () => {
        const heroCards = document.getElementsByClassName('hero-card');
        const skillCards = document.getElementsByClassName('skill-card');
        const projectsCards = document.getElementsByClassName('project-card');

        gsap.set([heroCards, skillCards, projectsCards], { opacity: 0 });

        gsap.to(heroCards, { opacity: 1, delay: 1, duration: DURATION });
        gsap.to(skillCards, { opacity: 1, delay: 1.5, duration: DURATION });
        gsap.to(projectsCards, { opacity: 1, delay: 2, duration: DURATION });
    };

    // Effects
    useEffect(() => {
        heroEntranceAnimation();
        const width = window.innerWidth;
        if (width >= 768) lineFullAnimatinon();
        else lineMinAnimation();
        cardsAnimation();
    }, []);
}

export default useTransition;
