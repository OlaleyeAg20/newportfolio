import avater from './assets/avater.png'
import Button from './components/Button'

function Hero(){
    let style = {
        color: 'var(--brand1)',
        fontSize: '2rem',
        textAlign: 'center'
    }

    let h1style = {
        fontSize: "2rem",
        color: 'var(--white)'
    }

    return (
        <section className='hero-section'>
            <h1 style={style}>Developer</h1>
            <div className="hero">
                <div className="card">
                    <img src={avater} alt="avater" />
                    <h1 style={h1style}>Ayomide</h1>
                    <p>Frontend Developer</p>
                    <div className="contacts">
                        <span className="email">
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0.583361 2.48988C0.583267 2.49564 0.583257 2.50139 0.583333 2.50715V9.5C0.583333 10.4638 1.3695 11.25 2.33333 11.25H11.6667C12.6305 11.25 13.4167 10.4638 13.4167 9.5V2.50721C13.4167 2.50141 13.4167 2.4956 13.4166 2.4898C13.4111 1.53063 12.6271 0.75 11.6667 0.75H2.33333C1.37287 0.75 0.588839 1.53067 0.583361 2.48988ZM1.81217 2.2398C1.90864 2.04904 2.10702 1.91667 2.33333 1.91667H11.6667C11.893 1.91667 12.0914 2.04904 12.1878 2.2398L7 5.87128L1.81217 2.2398ZM12.25 3.62038V9.5C12.25 9.8195 11.9862 10.0833 11.6667 10.0833H2.33333C2.01383 10.0833 1.75 9.8195 1.75 9.5V3.62038L6.66548 7.06122C6.86633 7.20182 7.13367 7.20182 7.33452 7.06122L12.25 3.62038Z" fill="#12F7D6"/>
</svg>

                            Olaleye349@gmail.com
                        </span>
                        <span className="country">
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5.99999 3.5C4.71133 3.5 3.66666 4.54467 3.66666 5.83333C3.66666 7.122 4.71133 8.16667 5.99999 8.16667C7.28865 8.16667 8.33332 7.122 8.33332 5.83333C8.33332 4.54467 7.28865 3.5 5.99999 3.5ZM4.83332 5.83333C4.83332 5.189 5.35566 4.66667 5.99999 4.66667C6.64432 4.66667 7.16666 5.189 7.16666 5.83333C7.16666 6.47767 6.64432 7 5.99999 7C5.35566 7 4.83332 6.47767 4.83332 5.83333Z" fill="#12F7D6"/>
<path fillRule="evenodd" clipRule="evenodd" d="M5.6761 13.9018C5.67627 13.9019 5.67641 13.902 5.99999 13.4167L5.6761 13.9018C5.87204 14.0324 6.12762 14.0327 6.32356 13.902L5.99999 13.4167C6.32356 13.902 6.3234 13.9021 6.32356 13.902L6.32555 13.9007L6.32944 13.8981L6.3428 13.8891C6.35416 13.8813 6.37036 13.8703 6.39108 13.8559C6.43251 13.8272 6.49205 13.7854 6.56711 13.7312C6.71717 13.6228 6.92961 13.4646 7.18368 13.2623C7.69088 12.8584 8.36868 12.275 9.04846 11.5574C10.3842 10.1475 11.8333 8.10947 11.8333 5.83333C11.8333 4.28624 11.2187 2.80251 10.1248 1.70854C9.03082 0.614581 7.54709 0 5.99999 0C4.45289 0 2.96916 0.614581 1.8752 1.70854C0.781238 2.80251 0.166656 4.28624 0.166656 5.83333C0.166656 8.10947 1.61581 10.1475 2.95152 11.5574C3.6313 12.275 4.3091 12.8584 4.8163 13.2623C5.07037 13.4646 5.28281 13.6228 5.43287 13.7312C5.50793 13.7854 5.56747 13.8272 5.6089 13.8559C5.62962 13.8703 5.64582 13.8813 5.65718 13.8891L5.67054 13.8981L5.67443 13.9007L5.6761 13.9018ZM2.70016 2.5335C3.57533 1.65833 4.76231 1.16667 5.99999 1.16667C7.23767 1.16667 8.42465 1.65833 9.29982 2.5335C10.175 3.40867 10.6667 4.59566 10.6667 5.83333C10.6667 7.64053 9.49081 9.39415 8.20152 10.7551C7.5688 11.4229 6.9341 11.9697 6.45693 12.3497C6.27934 12.4911 6.12423 12.6089 5.99999 12.7007C5.87575 12.6089 5.72064 12.4911 5.54305 12.3497C5.06588 11.9697 4.43118 11.4229 3.79846 10.7551C2.50917 9.39415 1.33332 7.64053 1.33332 5.83333C1.33332 4.59566 1.82499 3.40867 2.70016 2.5335Z" fill="#12F7D6"/>
</svg>

                            Nigeria
                        </span>
                        <span className="role">
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5.83334 0.166687C5.36921 0.166687 4.9241 0.351061 4.59591 0.67925C4.26772 1.00744 4.08334 1.45256 4.08334 1.91669V2.50002H2.33334C1.36685 2.50002 0.583344 3.28352 0.583344 4.25002V10.0834C0.583344 11.0499 1.36685 11.8334 2.33334 11.8334H11.6667C12.6332 11.8334 13.4167 11.0499 13.4167 10.0834V4.25002C13.4167 3.28352 12.6332 2.50002 11.6667 2.50002H9.91668V1.91669C9.91668 1.45256 9.7323 1.00744 9.40411 0.67925C9.07593 0.351061 8.63081 0.166687 8.16668 0.166687H5.83334ZM8.75001 2.50002V1.91669C8.75001 1.76198 8.68855 1.6136 8.57916 1.50421C8.46976 1.39481 8.32139 1.33335 8.16668 1.33335H5.83334C5.67863 1.33335 5.53026 1.39481 5.42086 1.50421C5.31147 1.6136 5.25001 1.76198 5.25001 1.91669V2.50002H8.75001ZM5.25001 3.66669H8.75001V10.6667H5.25001V3.66669ZM4.08334 3.66669H2.33334C2.01118 3.66669 1.75001 3.92785 1.75001 4.25002V10.0834C1.75001 10.4055 2.01118 10.6667 2.33334 10.6667H4.08334V3.66669ZM9.91668 10.6667V3.66669H11.6667C11.9888 3.66669 12.25 3.92785 12.25 4.25002V10.0834C12.25 10.4055 11.9888 10.6667 11.6667 10.6667H9.91668Z" fill="#12F7D6"/>
</svg>

                            Full-time/Freelancer
                        </span>
                        <span className="website">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.91417 0.622203C8.99648 0.614228 8.11237 0.967009 7.45226 1.60456L7.44624 1.61047L6.4429 2.60797C6.21443 2.83511 6.21336 3.20445 6.4405 3.43292C6.66764 3.66139 7.03698 3.66247 7.26545 3.43533L8.26563 2.44096C8.7054 2.01767 9.29357 1.78352 9.90403 1.78883C10.5158 1.79414 11.1011 2.03954 11.5337 2.47215C11.9663 2.90477 12.2117 3.49 12.217 4.1018C12.2223 4.71199 11.9884 5.29992 11.5654 5.73962L9.8192 7.48583C9.58265 7.72247 9.29791 7.90553 8.98442 8.02247C8.67093 8.13941 8.33596 8.18757 8.00223 8.16367C7.66849 8.13976 7.3438 8.04437 7.05018 7.88395C6.75656 7.72353 6.50087 7.50184 6.30046 7.23391C6.10749 6.97593 5.74192 6.92323 5.48394 7.1162C5.22596 7.30917 5.17326 7.67474 5.36623 7.93272C5.66685 8.33461 6.05038 8.66715 6.49082 8.90778C6.93125 9.14841 7.41829 9.2915 7.91889 9.32735C8.41949 9.3632 8.92194 9.29097 9.39217 9.11556C9.8624 8.94016 10.2894 8.66567 10.6442 8.31072L12.3942 6.56079L12.4013 6.55356C13.0388 5.89345 13.3916 5.00935 13.3836 4.09166C13.3756 3.17397 13.0076 2.29613 12.3586 1.6472C11.7097 0.998268 10.8319 0.630177 9.91417 0.622203Z" fill="#12F7D6"/>
<path d="M6.08111 4.6726C5.58051 4.63675 5.07805 4.70898 4.60782 4.88439C4.13762 5.05979 3.71064 5.33425 3.35584 5.68916L1.60584 7.43916L1.59873 7.44639C0.96118 8.1065 0.608399 8.99061 0.616374 9.9083C0.624348 10.826 0.99244 11.7038 1.64137 12.3528C2.2903 13.0017 3.16814 13.3698 4.08583 13.3778C5.00352 13.3857 5.88763 13.0329 6.54773 12.3954L6.55496 12.3883L7.55246 11.3908C7.78027 11.163 7.78027 10.7936 7.55246 10.5658C7.32466 10.338 6.95531 10.338 6.72751 10.5658L5.73378 11.5596C5.29408 11.9825 4.70616 12.2164 4.09597 12.2111C3.48417 12.2058 2.89894 11.9604 2.46633 11.5278C2.03371 11.0952 1.78831 10.51 1.783 9.89816C1.77769 9.28796 2.01164 8.70004 2.43458 8.26034L4.1808 6.51412C4.41734 6.27749 4.70209 6.09442 5.01558 5.97748C5.32906 5.86054 5.66403 5.81239 5.99777 5.83629C6.3315 5.86019 6.65619 5.95559 6.94981 6.11601C7.24344 6.27643 7.49913 6.49812 7.69954 6.76605C7.89251 7.02403 8.25808 7.07673 8.51606 6.88376C8.77403 6.69078 8.82673 6.32522 8.63376 6.06724C8.33315 5.66535 7.94961 5.33281 7.50918 5.09218C7.06874 4.85155 6.58171 4.70846 6.08111 4.6726Z" fill="#12F7D6"/>
</svg>

                            www.ayomide.com
                        </span>
                        <div className="languages">
                            <span className="lang">HTML</span>
                            <span className="lang">CSS </span>
                            <span className="lang">JS </span>
                            <span className="lang">React</span>
                        </div>
                    </div>
                    <Button text="Download CV" type="secondary" />
                </div>
                <div className="aboutText">
                    <h1>
                        Hey<br /> I&apos;m <span className="name">Ayomide</span>,<br /> Frontend Developer 
                    </h1>
                    <p>
                        I help business grow by crafting amazing web experiences. If you are looking for a developer that likes to get stuff done,
                    </p>
                    <a href='https://wa.me/+2347014329650' target={'_blank'}><h2><span className='name'>Then Let&apos;s Talk</span>
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M7.43127e-05 2.98266C-8.78633e-05 2.99253 -0.000104211 3.00239 2.4801e-05 3.01225V15C2.4801e-05 16.6523 1.34774 18 3.00002 18H19C20.6523 18 22 16.6523 22 15V3.01236C22.0002 3.00242 22.0001 2.99247 22 2.98251C21.9905 1.33822 20.6465 0 19 0H3.00002C1.35352 0 0.0094652 1.3383 7.43127e-05 2.98266ZM2.1066 2.55395C2.27198 2.22692 2.61206 2 3.00002 2H19C19.388 2 19.7281 2.22692 19.8934 2.55395L11 8.77934L2.1066 2.55395ZM20 4.92066V15C20 15.5477 19.5477 16 19 16H3.00002C2.45231 16 2.00002 15.5477 2.00002 15V4.92066L10.4266 10.8192C10.7709 11.0603 11.2292 11.0603 11.5735 10.8192L20 4.92066Z" fill="#12F7D6"/>
</svg>

                    </h2></a>
                </div>
                <div className="experience">
                    <div>
                        <h1>4</h1>
                        <p>Programming Languages</p>
                    </div>
                    <div>
                        <h1>6</h1>
                        <p>Development Tools</p>
                    </div>
                    <div>
                        <h1>2</h1>
                        <p>Years of Experiense</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero