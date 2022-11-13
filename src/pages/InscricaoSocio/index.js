import './index.css'
import NavbarUser from '../../components/NavbarUser'

export default function InscricaoSocio() {
    return (
        <div className='inscricaoSocio'>
            <div className="bg-img">
                <img src="/img/logo.png" alt="logo Quarta Jovem" width='200px' />
            </div>
            <h1>Página bloqueada para sócios</h1>
            <div className="descricao">
                <h3>O que é a UMP?</h3>
                <p>A UMP (União de Mocidade Presbiteriana) é uma Sociedade Interna
                    da Igreja Presbiteriana do Brasil. É uma verdadeira força de integração
                    que mostra a união de sócios sob o critério de ter 18-35 anos de idade.
                    Está sob a orientação, supervisão e superintendência do Conselho da Igreja,
                    com o qual se relacionam por meio de um(a) Conselheiro(a). Quer saber mais 
                    sobre a UMP? <a target="_blank" href="https://ump.org.br/">Acesse o site oficial aqui!</a>
                </p>
                <h3>Benefícios</h3>
                <p>
                    a) tomar assento na plenária;<br />
                    b) propor à Diretoria ou a plenária as medidas que julgarem oportunas para o
                    progresso da Sociedade.
                </p>
                <h3>Deveres</h3>
                <p>
                    a) Cumprir fielmente as disposições deste guia;<br />
                    b) Acatar as deliberações tomadas pela Plenária, Diretoria ou Comissão
                    Executiva;<br />
                    c) Participar com interesse de todas as atividades da UMP em âmbito local
                    ou geral;<br />
                    d) Exercer com zelo os cargos, comissões ou incumbências que lhe forem
                    atribuídos;<br />
                    e) Prestigiar as autoridades da Igreja em todos os âmbitos;<br />
                    f) Manter vida devocional regular e frequentar assiduamente todas as
                    reuniões da
                    Igreja;<br />
                    g) Contribuir moral, espiritual e financeiramente para o desenvolvimento do
                    Reino de Deus na terra;<br />
                    h) contribuir com as taxas votadas pela sua UMP quando for este o caso.<br />
                    i) pagar a anuidade por contribuição individual estabelecida pela
                    Confederação Nacional
                </p>
                <h3>Quanto é a colaboração do sócio?</h3>
                <p>
                    À vista anual: R$0,00 <br />
                    Mensalidade: R$0,00 <br />
                    Cartão de crédito: 10x de R$0,00
                </p>
            </div>
            <div className="inscricaoContato">
                <h4>Tem interesse em participar da sociedade da UMP - Quarta Jovem?</h4>
                <h5>Converse com nosso primeiro-secretario!</h5>
                <a href={`https://api.whatsapp.com/send?phone=87996022245`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <NavbarUser />
        </div>
    )
}