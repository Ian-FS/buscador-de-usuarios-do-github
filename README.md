# Frontend Mentor - GitHub user search app

![Design preview for the GitHub user search app coding challenge](./preview.jpg)

## Bem-vindo! 👋

Obrigado por adquirir este desafio de codificação premium do Frontend Mentor.

Os desafios do [Frontend Mentor](https://www.frontendmentor.io) ajudam você a melhorar suas habilidades de codificação criando projetos realistas. Esses desafios premium são peças de portfólio perfeitas, portanto, sinta-se à vontade para usar o que você criar em seu portfólio para mostrar aos outros.

**Para fazer este desafio, você precisa ter um bom conhecimento de HTML, CSS e JavaScript.**

## O desafio

Seu desafio é criar esse aplicativo de pesquisa de usuários do GitHub usando a [API de usuários do GitHub](https://docs.github.com/en/rest/reference/users#get-a-user) e aproximá-lo de o desenho possível.

Você pode usar qualquer ferramenta que desejar para ajudá-lo a concluir o desafio. Portanto, se você tem algo que gostaria de praticar, sinta-se à vontade para tentar.

Seus usuários devem ser capazes de:

- Veja o layout ideal para o aplicativo, dependendo do tamanho da tela do dispositivo
- Veja os estados de foco para todos os elementos interativos na página
- Pesquise usuários do GitHub pelo nome de usuário
- Veja informações relevantes do usuário com base em sua pesquisa
- Alternar entre temas claros e escuros
- **Bônus**: Tenha o esquema de cores correto escolhido para eles com base nas preferências do computador. _Dica_: Pesquise `prefers-color-scheme` em CSS.

Quer algum apoio no desafio? [Junte-se à nossa comunidade Slack](https://www.frontendmentor.io/slack) e faça perguntas no canal **#help**.

O endpoint da API dos usuários do GitHub é `https://api.github.com/users/:username`. Portanto, se você quiser pesquisar o perfil do Octocat, poderá fazer uma solicitação para `https://api.github.com/users/octocat`.

### Comportamento esperado

- No primeiro carregamento, mostre as informações de perfil do Octocat.
- Exibe uma mensagem de erro (como mostrado no design) se nenhum usuário for encontrado quando uma nova pesquisa for feita.
- Se um usuário do GitHub não adicionou seu nome, mostre seu nome de usuário onde o nome estaria sem o símbolo `@` e novamente abaixo com o símbolo `@`.
- Se a biografia de um usuário do GitHub estiver vazia, mostre o texto "Este perfil não tem biografia" com transparência adicionada (conforme mostrado no design). O texto lorem ipsum nos designs mostra como a biografia deve ficar quando estiver presente.
- Se algum local, site, twitter ou propriedades da empresa estiverem vazios, mostre o texto "Não disponível" com transparência adicionada (conforme mostrado no design).
- Site, twitter e informações da empresa devem ser todos links para esses recursos. Para o link da empresa, deve-se remover o símbolo `@` e vincular à página da empresa no GitHub. Para Octocat, com `@github` sendo retornado para a empresa, isso levaria a uma URL de `https://github.com/github`.

## Onde encontrar tudo

Sua tarefa é construir o projeto para o arquivo de design fornecido. Fornecemos as versões Sketch e Figma do design, para que você possa escolher qual ferramenta prefere usar. Você pode baixar o arquivo de design na plataforma. **Certifique-se de não compartilhá-los com mais ninguém.** O download do design também vem com um arquivo `README.md` para ajudá-lo a configurar.

Todos os ativos necessários para este projeto estão na pasta `/assets`. Os ativos já foram exportados para o tamanho de tela correto e otimizados. Algumas imagens são reutilizáveis ​​em vários tamanhos de tela. Portanto, se você não vir uma imagem em uma pasta específica, ela normalmente estará em outra pasta dessa página.

O sistema de design no arquivo de design fornecerá mais informações sobre as várias cores, fontes e estilos usados ​​neste projeto.

## Construindo seu projeto

Sinta-se à vontade para usar qualquer fluxo de trabalho com o qual se sinta confortável. Abaixo está um processo sugerido, mas você não precisa seguir estas etapas:

1. Separe o `starter-code` do restante deste projeto e renomeie-o para algo significativo para você. Inicialize a base de código como um repositório público no [GitHub](https://github.com/). A criação de um repositório facilitará o compartilhamento de seu código com a comunidade, caso você precise de ajuda. Se você não tiver certeza de como fazer isso, [leia este recurso Try Git](https://try.github.io/). **⚠️ IMPORTANTE ⚠️: Já existem alguns arquivos `.gitignore` neste projeto. Por favor, não os remova ou altere o conteúdo dos arquivos. Se você criar um novo projeto, use os arquivos `.gitignore` fornecidos em sua nova base de código. Isso evita o upload acidental dos arquivos de design para o GitHub. Com esses desafios premium, certifique-se de não compartilhar os arquivos de design em seu repositório do GitHub. Obrigado!**
2. Configure seu repositório para publicar seu código em um endereço da web. Isso também será útil se você precisar de ajuda durante um desafio, pois pode compartilhar a URL do seu projeto com a URL do repositório. Existem várias maneiras de fazer isso e fornecemos algumas recomendações abaixo.
3. Examine os designs para começar a planejar como você abordará o projeto. Esta etapa é crucial para ajudá-lo a pensar no futuro para que as classes CSS criem estilos reutilizáveis.
4. Antes de adicionar qualquer estilo, estruture seu conteúdo com HTML. Escrever seu HTML primeiro pode ajudar a focar sua atenção na criação de conteúdo bem estruturado.
5. Escreva os estilos básicos para seu projeto, incluindo estilos de conteúdo gerais, como `font-family` e `font-size`.
6. Comece adicionando estilos ao topo da página e trabalhe para baixo. Apenas passe para a próxima seção quando estiver satisfeito por ter concluído a área em que está trabalhando.

## Implantando seu projeto

Como mencionado acima, existem muitas maneiras de hospedar seu projeto gratuitamente. Nossos anfitriões recomendados são:

- [Páginas do GitHub](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

Você pode hospedar seu site usando uma dessas soluções ou qualquer um de nossos outros provedores confiáveis. [Leia mais sobre nossos hosts recomendados e confiáveis](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Crie um `README.md` personalizado

Recomendamos fortemente substituir este `README.md` por um personalizado. Fornecemos um modelo dentro do arquivo [`README-template.md`](./README-template.md) neste código inicial.

O modelo fornece um guia sobre o que adicionar. Um `README` personalizado ajudará você a explicar seu projeto e refletir sobre seus aprendizados. Sinta-se à vontade para editar nosso modelo o quanto quiser.

Depois de adicionar suas informações ao modelo, exclua este arquivo e renomeie o arquivo `README-template.md` para `README.md`. Isso fará com que apareça como o arquivo README do seu repositório.

## Enviando sua solução

Envie sua solução na plataforma para o resto da comunidade ver. Siga nosso ["Guia completo para enviar soluções"](https://medium.com/frontend-mentor/a-complete-guide-to-submitted-solutions-on-frontend-mentor-ac6384162248) para obter dicas sobre como fazer esse.

Lembre-se de que, se estiver procurando feedback sobre sua solução, faça perguntas ao enviá-la. Quanto mais específico e detalhado você for com suas perguntas, maior a chance de obter um feedback valioso da comunidade.

**⚠️ IMPORTANTE ⚠️: Com esses desafios premium, certifique-se de não enviar os arquivos de design para o GitHub ao enviar para a plataforma e compartilhá-los. Se você criou um novo projeto, a maneira mais fácil de fazer isso é copiar o `.gitignore` fornecido neste projeto inicial.**

## Compartilhando sua solução

Existem vários lugares onde você pode compartilhar sua solução:

1. Compartilhe sua página de solução no canal **#finished-projects** da [comunidade Slack](https://www.frontendmentor.io/slack).
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) e mencione **@frontendmentor**, incluindo o repo e os URLs ativos no tweet. Adoraríamos dar uma olhada no que você construiu e ajudar a compartilhá-lo.
3. Compartilhe sua solução em outros canais sociais como o LinkedIn.
4. Faça um blog sobre sua experiência na construção de seu projeto. Escrever sobre seu fluxo de trabalho, escolhas técnicas e falar sobre seu código é uma maneira brilhante de reforçar o que você aprendeu. Ótimas plataformas para escrever são [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/) e [CodeNewbie](https://community.codenewbie.org /).

Fornecemos modelos para ajudá-lo a compartilhar sua solução depois de enviá-la na plataforma. Edite-os e inclua perguntas específicas quando estiver procurando feedback.

Quanto mais específico você for com suas perguntas, mais provável será que outro membro da comunidade lhe dê feedback.

## Tem feedback para nós?

Adoramos receber feedback! Estamos sempre buscando melhorar nossos desafios e nossa plataforma. Portanto, se você tiver algo que gostaria de mencionar, envie um e-mail hi[at]frontendmentor[dot]io.

**Divirta-se construindo!** 🚀
