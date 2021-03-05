import { useParams } from 'react-router-dom';
import Details from './Details';

const Photo = (props) => {
    const { photoid } = useParams();
    return (
        <>
            <h2>Standard</h2>
            <Details description="200px Square" height="200" width="200" id={photoid} g='' b=''/>
            <Details description="400px Square" height="400" width="400" id={photoid} g='' b=''/>
            <Details description="Landscape 200px by 300px" height="200" width="300" id={photoid} g='' b=''/>
            <Details description="Landscape 400px by 600px" height="400" width="600" id={photoid} g='' b=''/>
            <Details description="Landscape 800px by 1200px" height="800" width="1200" id={photoid} g='' b=''/>
            <Details description="Portrait 300px by 200px" height="300" width="200" id={photoid} g='' b=''/>
            <Details description="Portrait 600px by 400px" height="600" width="400" id={photoid} g='' b=''/>
            <Details description="Portrait 1200px by 800px" height="1200" width="800" id={photoid} g='' b=''/>
            <h2>Grayscale</h2>
            <Details description="200px Square" height="200" width="200" id={photoid} g='grayscale' b=''/>
            <Details description="400px Square" height="400" width="400" id={photoid} g='grayscale' b=''/>
            <Details description="Landscape 200px by 300px" height="200" width="300" id={photoid} g='grayscale' b=''/>
            <Details description="Landscape 400px by 600px" height="400" width="600" id={photoid} g='grayscale' b=''/>
            <Details description="Landscape 800px by 1200px" height="800" width="1200" id={photoid} g='grayscale' b=''/>
            <Details description="Portrait 300px by 200px" height="300" width="200" id={photoid} g='grayscale' b=''/>
            <Details description="Portrait 600px by 400px" height="600" width="400" id={photoid} g='grayscale' b=''/>
            <Details description="Portrait 1200px by 800px" height="1200" width="800" id={photoid} g='grayscale' b=''/>
            <h2>Blurred</h2>
            <Details description="200px Square" height="200" width="200" id={photoid} g='' b='blur=2'/>
            <Details description="400px Square" height="400" width="400" id={photoid} g='' b='blur=2'/>
            <Details description="Landscape 200px by 300px" height="200" width="300" id={photoid} g='' b='blur=2'/>
            <Details description="Landscape 400px by 600px" height="400" width="600" id={photoid} g='' b='blur=2'/>
            <Details description="Landscape 800px by 1200px" height="800" width="1200" id={photoid} g='' b='blur=2'/>
            <Details description="Portrait 300px by 200px" height="300" width="200" id={photoid} g='' b='blur=2'/>
            <Details description="Portrait 600px by 400px" height="600" width="400" id={photoid} g='' b='blur=2'/>
            <Details description="Portrait 1200px by 800px" height="1200" width="800" id={photoid} g='' b='blur=2'/>
            <h2>Grayscale & Blurred</h2>
            <Details description="200px Square" height="200" width="200" id={photoid} g='grayscale' b='blur=2'/>
            <Details description="400px Square" height="400" width="400" id={photoid} g='grayscale' b='blur=2'/>
            <Details description="Landscape 200px by 300px" height="200" width="300" id={photoid} g='grayscale' b='blur=2'/>
            <Details description="Landscape 400px by 600px" height="400" width="600" id={photoid} g='grayscale' b='blur=2'/>
            <Details description="Landscape 800px by 1200px" height="800" width="1200" id={photoid} g='grayscale' b='blur=2'/>
            <Details description="Portrait 300px by 200px" height="300" width="200" id={photoid} g='grayscale' b='blur=2'/>
            <Details description="Portrait 600px by 400px" height="600" width="400" id={photoid} g='grayscale' b='blur=2'/>
            <Details description="Portrait 1200px by 800px" height="1200" width="800" id={photoid} g='grayscale' b='blur=2'/>
        </>
    )
}

export default Photo;