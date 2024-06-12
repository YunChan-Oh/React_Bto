import './nav.css'
import home from '../../../assets/sidebar/image/home.svg'
import bet from '../../../assets/sidebar/image/bet_list.svg'
import ranking from '../../../assets/sidebar/image/ranking.svg'
import board from '../../../assets/sidebar/image/board.svg'

const Nav = (props) => {
    let displayName
    let src
    switch (props.name) {
        case 'home':
            displayName = '홈'
            src = home
            break
        case 'bet':
            displayName = '베팅 목록'
            src = bet
            break
        case 'ranking':
            displayName = '랭킹'
            src = ranking
            break
        default:
            displayName = '게시판'
            src = board
            break
    }

    let color

    if (props.select === 1) {
        color = "#363636"
    }


    return (
        <div id={"nav"} style={{background: color}}>
            <img src={src} alt={props.name} />
            <span>{displayName}</span>
        </div>
    )
}

export default Nav