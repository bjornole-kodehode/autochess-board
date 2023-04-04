import { characters } from '../characters'

export default function ChampionPool() {
    const characterImgs = []
    for (const character of characters) {
      for (const role of Object.values(character)) {
        for (const image of Object.values(role)) {
          /* if (image.endsWith(".png")) { */
            characterImgs.push(image)
          /* } */
        }
      }
    }
  
    console.log(characterImgs)
    return (
      <div className="App">
          <h1>Autochess board</h1>
          <div className='characters'>
            {characterImgs.map((characterImg, idx) => (
              <div key={idx} draggable={true} className='character-img'>
                {characterImg ? <img src={characterImg} /> : <></>}
              </div>
              ))}
          </div>
      </div>
    )
}
