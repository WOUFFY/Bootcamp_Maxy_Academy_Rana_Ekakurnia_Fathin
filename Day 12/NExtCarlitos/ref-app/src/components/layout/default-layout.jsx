import Header from "./header/header"
import Footer from "./footer/footer"

export default function DefaultLayout({children}){
    return(
        <body>
            <Header/>
            <main className='main'>{children}</main>
            <Footer/>
        </body>
    )
}