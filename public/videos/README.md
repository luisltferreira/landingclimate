# Vídeo de Background do Hero

## Como adicionar o vídeo

1. Coloque o arquivo de vídeo em MP4 nesta pasta com o nome: `hero-background.mp4`
2. (Opcional) Adicione também uma versão WebM: `hero-background.webm` para melhor compatibilidade
3. (Opcional) Adicione uma imagem de poster: `hero-poster.jpg` que será exibida enquanto o vídeo carrega

## Especificações recomendadas

- **Formato**: MP4 (H.264) + WebM (opcional)
- **Resolução**: 1920x1080 (Full HD) ou 4K
- **Duração**: 10-30 segundos (será reproduzido em loop)
- **Tamanho**: < 5MB (comprimir o vídeo)
- **Conteúdo**: Natureza, ambiente, movimento suave
- **Áudio**: Sem áudio ou removido (vídeo será muted)

## Ferramentas para otimizar

- **HandBrake**: Para compressão de vídeo
- **FFmpeg**: Para conversão e otimização
- **CloudConvert**: Conversão online

## Exemplo de comando FFmpeg

```bash
# Comprimir vídeo
ffmpeg -i input.mp4 -vcodec h264 -acodec mp2 -crf 23 -preset slow hero-background.mp4

# Converter para WebM
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus hero-background.webm
```

## Nota

O vídeo só será exibido em desktop (telas maiores que 768px). Em mobile, será usado o gradiente animado para melhor performance.

