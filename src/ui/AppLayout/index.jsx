import { Outlet } from "react-router-dom"
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
export default function AppLayout(){
    return(
        <div className={`page__wrapper`}>
            <div>
                <Header />
            </div>
            <div className={`page__inner`}>
                <Sidebar />
                <div className={`page__right`}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}