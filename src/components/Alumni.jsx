import NorthEastIcon from '@mui/icons-material/NorthEast';

function Alumni() {
    return <>
        <div id="alumni" className='grid-item'>
            <div className="alumni-container">
                <div className="alumin-tagline">
                    <h1>Meet your Alumni</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos saepe soluta voluptates. Quibusdam excepturi, voluptatem doloremque cupiditate non odio delectus ex corporis animi aliquam, nesciunt commodi dolore omnis neque alias.</p>
                </div>
                <div className="alumnis">
                    <div className="alumni-item first-item">
                        <div className='flexbox'>
                            <div className="name">Manjeet</div> <NorthEastIcon />
                        </div>
                        <div className="three-circle flexbox">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam
                        </div>
                        <div className="circle bottom"></div>
                    </div>
                    <div className="alumni-item second-item">
                        <div className='flexbox'>
                            <div className="name">Manjeet</div> <NorthEastIcon />
                        </div>
                        <div className="three-circle flexbox">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam
                        </div>
                        <div className="circle bottom"></div>
                    </div>
                    <div className="alumni-item third-item">
                        <div className='flexbox'>
                            <div className="name">Manjeet</div> <NorthEastIcon />
                        </div>
                        <div className="three-circle flexbox">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam
                        </div>
                        <div className="circle bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Alumni;