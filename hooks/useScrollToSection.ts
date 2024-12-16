'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const useScrollToSection = () => {
    const router = useRouter();
    const pathname = usePathname();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavigation = (e: React.MouseEvent, href: string, sectionId: string) => {
        e.preventDefault();
        // Update the URL without navigation
        window.history.pushState({}, '', href);
        scrollToSection(sectionId);
    };

    // Handle initial load scrolling
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Remove leading slash and map to section ID
            const path = pathname.replace('/', '');
            const sectionId = path || 'home'; // default to home if empty path
            
            // Small delay to ensure page is fully loaded
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);
        }
    }, [pathname]);

    return { handleNavigation };
}; 