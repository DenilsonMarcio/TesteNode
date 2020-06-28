# TesteNode

npm install express --save
npm install nodemon --save-dev
npm install mysql --save 
npm install jquery --save 
npm install bootstrap --save
npm install body-parser --save


# Aqui os passos para fazer o versionaento:
1° Logado acesse o repositorio que quer ajudar e clique em FORK para adicionar o repositorio para sua conta. 
2° clone para seu compoutador copiando a URL. 
3° Abra o terminal e digite git clone e cole a URL. 
4° no linux vai ser criada uma pasta chamada <nome do projeto clonado> dentro da Pasta pessoal
5° git status
6° Criar branch. Primeiro digite git branch pra ver qual branch esta usando. Normalmente master
criar é “git branch <nome da branch> “
7° pra alterar de branch que está apontando digite “git checkout < nova-branche>”
8° agora após alterar os arquivos é add com “git add”
9°  git commit -m “mensagem sobre o que fez”
10° Agora o importante é mudar a pasta original da pessoal que criou e caso ele aceite a mudança o meu repositorio vai ser alterado também. Comando é “git push --set-upstream origin <novo branche>
11° Login e senha pra fazer essa alteração.
12° No repositorio do Github procure a opção “compare & pull request”  Ou pode usar a opção “git marge /upstream” no terminal.  Adicione mais um comentário se quiser. 
13° Primeiro o dono do repositorio tem que aceitar para eu puder dar continuidade. 
14° Se digitar no terminar “git remote -v” vai dar pra ver quantos branch tem, mas não da pra ver outros que não o seu. Com o comando “git remote add upstream <url do repositorio>” você ve todos os branches.
15° Ai se der o comando “git feth upstream” vai pra todos. 
16° Para o dono do repositorio aceitar o pull request é só confirmar a Merge. 
17° No seu repositorio vai aparecer uma msg do github para aceitar o pull request. 
18° Apos isso ainda tem que fazer a troca da <nova branche> para a <master> “git checkout master”
19° na master digite “git branch” para confirmar que está na master. 
20° Para aceitar e deixar o comando igual do repositorio original “git fetch origin” “git merge origin/nova-branche”
