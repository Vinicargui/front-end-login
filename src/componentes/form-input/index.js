
import './estilo.css'

function FormInput(){
    return(
        <div className='formularioContainer'>
            <div className='inputContainer'>
                <div className='logo'>
               <h3><b>TR</b>sistem</h3>
                </div>
                <label htmlFor='usuario'>E-mail</label>
                <input type='text' name='email' placeholder='E-mail do usuario'></input>
                <label htmlFor='senha' >Senha</label>          
                <input className='senha' type='password' name='senha' placeholder='Digite sua senha'></input>
                 <div className='btn'>
                    <button type='submit'> Entrar</button>
                 </div>
                 <a href="#">Esqueceu a senha</a>
            </div>    
        </div>
    )

}   

export default FormInput