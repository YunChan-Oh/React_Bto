import './authedBanner.css'
import whale from '../../../assets/home/img/whale_3d.png'

const AuthedBanner = () => {
    let name = "오윤찬"
    let coin = 100000000
    let ranking = 1

    return (
        <div id={"authenticatedHome"}>
            <section className={"banners"}>
                <p className={"semi-title"}>홈</p>
                <section className={"banner"}>
                    <h1>환영합니다. {name}님</h1>
                    <div className={"br"}/>
                    <h2>현재 내 자산 :</h2> <h2 className={"user"}>{coin.toLocaleString()} 코인</h2>
                    <h3>현재 내 랭킹 :</h3> <h3 className={"user"}>{ranking}등</h3>
                    <img src={whale} alt={"whale"}/>
                </section>
            </section>
        </div>
    )
}

export default AuthedBanner