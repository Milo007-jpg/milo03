// app/user/page.tsx หรือ app/user/index.tsx
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '/app/component/nav'; // ปรับเส้นทางให้ตรงกับที่เก็บไฟล์
import Footer from '/app/footer/footer'; // ปรับเส้นทางให้ตรงกับที่เก็บไฟล์

export default function UserPage() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login'); // เปลี่ยนเส้นทางไปที่หน้า login ถ้าไม่มี token
        } else {
            // ถ้ามี token ให้เรียก API หรือใช้ข้อมูล token เพื่อดึงข้อมูลผู้ใช้
            // ตัวอย่างนี้สมมุติว่าใช้ token เพื่อดึงข้อมูลผู้ใช้
            fetch('http://localhost:3000/api/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(() => {
                router.push('/login'); // ถ้าการดึงข้อมูลล้มเหลว ให้นำทางไปที่หน้า login
            });
        }
    }, [router]);

    if (loading) {
        return <div>Loading...</div>; // แสดงข้อความโหลดระหว่างรอการตรวจสอบ token
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Welcome {user?.username}</h1>
                {/* แสดงข้อมูลของผู้ใช้ */}
            </div>
            <Footer />
        </>
    );
}
