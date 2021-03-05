import {mailData} from '../global'

export default async function sendMail(data:mailData):Promise<Response> {
    const miInit: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(
        {
          asunto: `contacto de ${data.name} - cell: ${data.cell}`,
          nombre: data.name,
          email: data.email,
          texto: `${data.message} - terminos y condiciones: ${data.checkBox}`
        }
      ),
    }
    const response = await fetch('https://taskherokuapi.herokuapp.com/mail', miInit)
    const responseJson = await response.json();
    return responseJson
  }