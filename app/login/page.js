'use client';
import { useRouter } from 'next/navigation';
import Navbar from '/app/component/nav';
import Footer from '/app/footer/footer';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginPage() {
    const [username, setUserName] = useState('');
    const [password, setPassWord] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState(null);  // สร้าง state สำหรับเก็บข้อมูลผู้ใช้
    const router = useRouter();

    // ตรวจสอบ JWT token ถ้ามี token แล้วไปที่หน้า User ทันที
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // ดึงข้อมูลผู้ใช้ที่ต้องการจาก token หรือ API
            setUser({ username: 'yourUsername', status: 'active' }); // ตัวอย่างข้อมูลผู้ใช้
        }
    }, [router]);

    // ฟังก์ชันสำหรับการเข้าสู่ระบบ
    async function handleSubmit(e) {
        e.preventDefault();  // ป้องกันการรีเฟรชหน้า
        try {
            const res = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (res.ok) {
                const data = await res.json();
                localStorage.setItem('token', data.token);  // เก็บ JWT token ใน localStorage
                setUser({ username: data.username, status: data.status });  // เก็บข้อมูลผู้ใช้ใน state
                router.push('/user/login');  // นำผู้ใช้ไปที่หน้า User หลังจากเข้าสู่ระบบสำเร็จ
            } else {
                setErrorMessage('Invalid username or password');  // ข้อความแจ้งข้อผิดพลาด
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('An error occurred while logging in');
        }
    }

    // ฟังก์ชันสำหรับการออกจากระบบ
    function handleLogout() {
        localStorage.removeItem('token');  // ลบ JWT token ออกจาก localStorage
        setUser(null);  // ตั้งค่าผู้ใช้เป็น null
        router.push('/');  // เปลี่ยนเส้นทางไปที่หน้า login
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="card mt-5">
                    <div className="card-header bg-primary text-white">
                        Login
                    </div>
                    <div className="card-body">
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                        {user ? ( // ตรวจสอบว่ามีข้อมูลผู้ใช้หรือไม่
                            <>
                                <div className="alert alert-success">
                                    Logged in as: {user.username}, Status: {user.status}
                                </div>
                                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={username}
                                        onChange={(e) => setUserName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassWord(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
