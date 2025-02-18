import { useState } from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import "./style.css"

const FormAnuncio: React.FC = () => {
  const [displayFileUploader, setDisplayFileUploader] = useState(false);
  const [file, setFile] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [cell, setCell] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  async function addProduct() {
    console.warn(file, name, price, state, city, cell, category, description)
    const formData = new FormData()
    formData.append("file", file)
    formData.append("name", name)
    formData.append("price", price)
    formData.append("state", state)
    formData.append("city", city)
    formData.append("cell", cell)
    formData.append("category", category)
    formData.append("description", description)

    // Trocar por API correto do Backend
    let result = await fetch("localhost:3550/produtos", {
      method: "POST",
      body: formData,
    }).then((resp) => {
      resp.json().then((result) => {
        console.warn(result)
      })
    })
  }

  return (
    <div>
      <div className="title col-sm-12 ">
        <h1 className="anuncio-h1">Criar anuncio</h1>
      </div>
      <div className="box">
        <div className="guide col-sm-6">
          <h4 className="anuncio-h4">Título</h4>
          <p className="anuncio-texto">
            Escreva um título claro e que chame a atenção. Não é permitido
            colocar no título letras maiusculas, números de telefone, e-mails e
            links.
          </p>

          <h4 className="anuncio-h4">Imagens</h4>
          <p className="anuncio-texto">
            Prefira adicionar imagens reais do produto em vez de imagens
            retiradas de catálogos da internet. Isso dá credibilidade ao seu
            anúncio. Aceitamos arquivos nos formatos jpg, jpeg, png e gif de até
            5MB.
          </p>

          <h4 className="anuncio-h4">Descrição</h4>
          <p className="anuncio-texto">
            Escreva de forma clara, assim receberá menos perguntas dos
            compradores. Inclua detalhes sobre o produto para encontraram o seu
            anúncio mais facilmente. Seja sincero e os compradores terão a
            expectativa alinhada e você receberá uma boa classificação.
          </p>
        </div>
        <div className="form col-sm-6">
          <h2 className="anuncio-h2">Preencha aqui os dados do seu anúncio</h2>
          <div>•
            <a 
              className='show-image-input'
              onClick={() => {setDisplayFileUploader(!displayFileUploader)}}
            >
              Clique aqui para carregar as suas fotos.
            </a>
          </div>
          {displayFileUploader && <input
            type="file"
            className="form-control file-input"
            onChange={(e: any) => setFile(e.target.files[0])}
            placeholder="File"
          ></input>}
          <h6 className="anuncio-obrigatorio">* Obrigatório</h6>
          <h3 className="anuncio-h3">Título *</h3>
          <input
            type="text"
            className="form-control-anuncio input-text"
            onChange={(e) => setName(e.target.value)}
            placeholder=""
          ></input>
          <h3 className="anuncio-h3">Valor</h3>
          <input
            type="text"
            className="form-control-anuncio input-text"
            onChange={(e) => setPrice(e.target.value)}
            placeholder=""
          ></input>
          <h3 className="anuncio-h3">Estado *</h3>
          <input
            type="text"
            className="form-control-anuncio input-text"
            onChange={(e) => setState(e.target.value)}
            placeholder=""
          ></input>
          <h3 className="anuncio-h3">Cidade *</h3>
          <input
            type="text"
            className="form-control-anuncio input-text"
            onChange={(e) => setCity(e.target.value)}
            placeholder=""
          ></input>
          <h3 className="anuncio-h3">Celular</h3>
          <input
            type="text"
            className="form-control-anuncio input-text"
            onChange={(e) => setCell(e.target.value)}
            placeholder=""
          ></input>
          <p className="confirmacao-cadastro">
            Este número de telefone será exibido no anúncio apenas para pessoas
            cadastradas.
          </p>
          <h3 className="anuncio-h3">Categoria *</h3>
          <input
            type="text"
            className="form-control-anuncio input-text"
            placeholder=""
            onChange={(e) => setCategory(e.target.value)}
          ></input>
          <h3 className="anuncio-h3">Descrição *</h3>
          <textarea
            rows={4}
            className="anuncio-text-area"
            onChange={(e) => setDescription(e.target.value)}
            placeholder=""
          />
          <div>
            <div className="termos-servico">
              <input type="checkbox" className="anuncio-checkbox" />
              <p className="texto-termos">
                Eu li os Termos de Serviço e as Políticas de Privacidade
              </p>
            </div>
          </div>
          <Link to="/confirma-anuncio" className="anuncio-submit">
            <button onClick={addProduct} className="btn btn-primary">
              Publicar
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FormAnuncio
