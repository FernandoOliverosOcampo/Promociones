import Controlador from "../controlador/controlador-registro-usuario.js";

const buttoRegistrar = document.getElementById('enviar');

const combobox = document.getElementById('cliente')
const form = document.getElementById('formulario');
const empresaInput = document.createElement('input'); 

empresaInput.setAttribute('type', 'hidden');
empresaInput.setAttribute('id', 'empresa');
empresaInput.setAttribute('placeholder', 'Nombre de la empresa');

combobox.addEventListener('change', ()=>{
  const seleccion = combobox.value;
  if (seleccion === 'empresa'){
    
    const empresalabel = document.createElement('label')
    empresalabel.textContent = 'Nombre de la empresa:';
    empresalabel.setAttribute('id','label')

    // const empresainput = document.createElement('input')
    empresaInput.setAttribute('type', 'text');
    // empresainput.setAttribute('placeholder', 'Nombre de la empresa');
    // empresaInput.setAttribute('id', 'inputEmpresa');
    
    form.appendChild(empresalabel)
    form.appendChild(empresaInput);

  }else{
    const labelexistente = document.getElementById('label')
    const inputexistente = document.getElementById('empresa');
    if (inputexistente){
      inputexistente.remove()
    }
    if(labelexistente){
      labelexistente.remove()
    }
    
  }
 
});

buttoRegistrar.addEventListener('click', () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
    
      swalWithBootstrapButtons.fire({
        title: '¿Estás seguro?',
        text: 'Deseas ingresar los datos a la BD',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            const numeroCedula = document.getElementById('numerocedula').value;
            const tipoDocumento = document.getElementById('tipodocumento').value;
            const nombre = document.getElementById('nombre').value;
            const segundoNombre = document.getElementById('segundonombre').value;
            const apellido = document.getElementById('apellido').value;
            const segundoApellido = document.getElementById('segundoapellido').value;
            const correo = document.getElementById('correo').value;
            const contrasena = document.getElementById('contraseña').value;
            const telefono = document.getElementById('telefono').value;
            const sexo = document.getElementById('sexo').value;
            const fechaNacimiento = document.getElementById('fecha').value;
            let tipoCliente = document.getElementById('cliente').value;
            let empresa = empresaInput.value;
          
          // Verificar campos vacíos
          if (numeroCedula === '' || nombre=== '' || segundoNombre=== ''|| apellido==='' || segundoApellido === '' || correo === '' || contrasena === ''  || telefono === '') {
            Swal.fire({
              icon: 'error',
              title: 'Campos vacíos',
              text: 'Por favor, completa todos los campos.',
            });
            return;
          }
          if (empresa ==''){
            empresa = 'Persona natural'
          }
        
         Controlador.insertarDatos(numeroCedula, tipoDocumento, nombre, segundoNombre, apellido, segundoApellido, correo, contrasena, telefono, sexo, fechaNacimiento, tipoCliente, empresa);
    
          // Limpiar los valores de los inputs
          document.getElementById('numerocedula').value ='';
          document.getElementById('nombre').value = '';
          document.getElementById('segundonombre').value = '';
          document.getElementById('apellido').value = '';
          document.getElementById('segundoapellido').value = '';
          document.getElementById('correo').value = '';
          document.getElementById('contraseña').value = '';
          document.getElementById('telefono').value = '';
          document.getElementById('fecha').value = '';
          document.getElementById('empresa').value = '';
       
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'No se ha ingresado nada',
            'error'
          );
        }
      });
    
})

const Vista ={
    mostrarMensajeError(mensaje) {
        Swal.fire({
          icon: 'error',
          title: 'Algo salió mal',
          text: mensaje,
        })
      },
    
      mostrarAlertaSatisfactorio(mensaje) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      },

}
export default Vista