import './sidebar.css'
import logo from '../../assets/BTOLogo.svg'
import logoutIcon from '../../assets/sidebar/image/logout.svg'
import Nav from './nav/nav.jsx'
import { useEffect, useState } from "react"

const Sidebar = () => {
    const [userName, setUserName] = useState('')
    const [coin, setCoin] = useState(0)
    const [ranking, setRanking] = useState(0)
    const [menu, setMenu] = useState([1, 0, 0, 0])
    const [login, setLogin] = useState(false)

    useEffect(() => {
        if (login) {
            setUserName("한태영")
            setCoin(100000000)
            setRanking(1)
        }
    }, [login])


    const logoutHandle = () => {
        setLogin(false)
    }

    const loginHandle = () => {
        setLogin(true)
    }

    const menuHandle = (num) => {
        switch (num) {
            case 0:
                setMenu([1, 0, 0, 0])
                break
            case 1:
                setMenu([0, 1, 0, 0])
                break
            case 2:
                setMenu([0, 0, 1, 0])
                break
            case 3:
                setMenu([0, 0, 0, 1])
                break
        }
    }





    const Login = () => {
        if (!login) {
            return <section className={"unLogin"} onClick={loginHandle}><p>로그인</p></section>
        } else {
            return (
                <>
                    <section className={"inLogin"}><p>{userName}님</p></section>
                    <section className={"logout"} onClick={logoutHandle}>
                        <div>
                            <img src={logoutIcon} alt="logout icon"/>
                            <span>로그아웃</span>
                        </div>
                    </section>
                </>
            )
        }
    }

    return (
        <div id={"sidebar"}>
            <aside>
                <section className={"logo"}><img src={logo} alt="BTO Logo"/> <span>BTO</span></section>
                <Login/>
                <hr/>
                <section className={"nav"}>
                    <ul>
                        <li onClick={() => menuHandle(0)}><Nav name='home' select={menu[0]}/></li>
                        <li onClick={() => menuHandle(1)}><Nav name='bet' select={menu[1]}/></li>
                        <li onClick={() => menuHandle(2)}><Nav name='ranking' select={menu[2]}/></li>
                        <li onClick={() => menuHandle(3)}><Nav name='board' select={menu[3]}/></li>
                    </ul>
                </section>
            </aside>
        </div>
    )
}

export default Sidebar
