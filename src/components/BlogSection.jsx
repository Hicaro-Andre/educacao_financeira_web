import "../styles/BlogSection.css"
import foto1 from "../assets/images/blog/foto1-blog.png"
import foto2 from "../assets/images/blog/foto2-blog.png"
import foto3 from "../assets/images/blog/foto3-blog.png"

function BlogSection() {
  return (
    <section className="blog" id="blog">
      <div className="blog__container-title">
        <h3>Finanças e Fé: Equilíbrio para uma Vida Próspera</h3>
        <p>
          A administração financeira é um dos pilares para uma vida equilibrada, tanto no aspecto pessoal quanto no espiritual. Muitas pessoas enfrentam dificuldades financeiras mesmo sendo fiéis nos dízimos e ofertas, o que levanta questionamentos sobre a verdadeira prosperidade. A chave para uma vida financeira saudável está na combinação da fé com a responsabilidade na gestão dos recursos.
        </p>
      </div>

      <div className="blog__card">
        <img alt="Imagem 1" src={foto1} />
        <div className="blog__card-text">
          <h3>A Verdadeira Prosperidade</h3>
          <p>
            Dízimos e ofertas não são garantias de enriquecimento instantâneo, mas sim expressões de obediência e generosidade. Deus nos convida a confiar Nele, mas também a aplicar princípios financeiros sólidos, como planejamento, controle de gastos e bom uso dos recursos. A verdadeira prosperidade inclui paz, segurança e equilíbrio, não apenas riqueza material.
          </p>
        </div>
      </div>

      <div className="blog__card">
        <img alt="Imagem 2" src={foto2} />
        <div className="blog__card-text">
          <h3>Erros Financeiros que Ameaçam Relacionamentos</h3>
          <p>
            No contexto dos relacionamentos, a falta de transparência e o descontrole financeiro estão entre os principais fatores que levam casais a crises. Erros comuns incluem esconder gastos, não ter um orçamento definido, endividamento excessivo e falta de alinhamento nos objetivos financeiros. A solução passa por diálogo, planejamento conjunto e disciplina na administração dos recursos do casal.
          </p>
        </div>
      </div>

      <div className="blog__card">
        <img alt="Imagem 3" src={foto3} />
        <div className="blog__card-text">
          <h3>Fé e Planejamento Caminham Juntos</h3>
          <p>
            A Bíblia nos ensina que confiar em Deus não exclui a necessidade de planejamento. O exemplo de José do Egito demonstra a importância de antecipar desafios e tomar decisões estratégicas. Criar um orçamento, evitar dívidas, construir uma reserva de emergência e buscar direção divina são passos essenciais para uma vida financeira equilibrada.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BlogSection;