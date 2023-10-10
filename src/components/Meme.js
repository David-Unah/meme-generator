import React, {useState, useEffect} from 'react'

const Meme = () => {

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setallMemes(data))
  }, [])

    const [memeImage, setMemeImage] = useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    function handleTextChange(event) {
      const {name, value} = event.target
      setMemeImage(prevMemeImage => {
        return {
            ...prevMemeImage,
            [name]: value
        } 
      })
    }

  const [allMemes, setallMemes] = useState()

    function handleClick() {
      let theImageUrl
      const totalNumberofData = allMemes.data.memes.length
      const randomNumber = Math.floor(Math.random() * totalNumberofData)
      theImageUrl = allMemes.data.memes[randomNumber].url
      setMemeImage(prevMemeImage => ({
        ...prevMemeImage,
        randomImage: prevMemeImage.randomImage = theImageUrl
      })) 
    }

    

  return (
    <div>
        <div className='form'>
            <input 
                  type='text' 
                  placeholder='Top text'
                  name='topText'
                  value={memeImage.topText}
                  onChange={handleTextChange}
            />
            <input 
                  type='text' 
                  placeholder='Buttom text'
                  name='bottomText'
                  value={memeImage.bottomText}
                  onChange={handleTextChange}
            />
            <button onClick={handleClick}>Get a new meme image  🖼</button>
        </div>
        <div className='memeDiv'>
        <img src={memeImage.randomImage} alt='random source' className='memeImage' />
        <h2 className='topText'>{memeImage.topText}</h2>
        <h2 className='buttomText'>{memeImage.bottomText}</h2>
        </div>
    </div>
  )
}

export default Meme