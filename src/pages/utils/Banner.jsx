import './banner.css'

function Banner() {
    return (
        <>
            <div className="banner" id='home'>
                <div className='bg bg-1'></div>
                <div className='bg bg-2'></div>
                <div className='bg bg-3'></div>
                <h1 className='neon-red'><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 100"
                    width="300"
                    height="150"
                >
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#2d112b"
                        fontSize="60"
                        fontWeight="bold"
                        fontFamily="Noto Sans Devanagari, sans-serif"
                       
                    >
                        आह्वान
                    </text>
                </svg></h1>
                <div className='bg bg-4'></div>
                <div className='bg bg-5'></div>
                <div className='bg bg-6'></div>
                <div className='bg bg-7'></div>
            </div>
        </>
    );
}

export default Banner;