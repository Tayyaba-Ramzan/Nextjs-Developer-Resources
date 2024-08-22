import React, { ReactNode } from 'react';
import AdminHeader from '@/component/AdminHeader';

interface AdminLayoutProps {
    children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <section>
            <AdminHeader/>
            {children}
        </section>
    );
}
