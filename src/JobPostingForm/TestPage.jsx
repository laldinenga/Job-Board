import Quill from "quill";


const App = () =>{
        
    const options = {
        debug: 'info',
        modules: {
        toolbar: true,
        },
        placeholder: 'Compose an epic...',
        theme: 'snow'
    };
    const quill = new Quill('#editor', options);

    return(
        <div>{quill}</div>
    )
}


export default App