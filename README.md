<!-- Criar schema no BD -->

npx drizzle-kit push

<!-- Inserir os seeds -->

npx tsx --env-file=.env src/db/seed.ts

<!-- Verificar os dados com prisma studio -->

npx drizzle-kit studio

<!-- Gerar Schema de autenticação com o better-auth -->

npx @better-auth/cli@1.2.12 generate

<!-- Letras Certificado -->

1 aula: S
2 aula: E
3 aula: X
4 aula: F
5 aula:
