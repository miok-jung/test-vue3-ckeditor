!(function (e) {
  const r = (e.pt = e.pt || {});
  (r.dictionary = Object.assign(r.dictionary || {}, {
    '%0 of %1': '%0 de %1',
    Aquamarine: 'Verde-azulado',
    Black: 'Preto',
    'Block quote': 'Bloco de citação',
    Blue: 'Azul',
    Bold: 'Negrito',
    'Bulleted List': 'Lista não ordenada',
    Cancel: 'Cancelar',
    Column: 'Coluna',
    'Decrease indent': 'Diminuir indentação',
    'Delete column': 'Eliminar coluna',
    'Delete row': 'Eliminar fila',
    'Dim grey': 'Cinzento-escuro',
    Downloadable: 'Descarregável',
    'Dropdown toolbar': 'Barra de ferramentas do dropdown',
    'Edit block': 'Editar bloco',
    'Edit link': 'Editar link',
    'Editor block content toolbar':
      'Barra de ferramentas de edição do conteúdo de blocos',
    'Editor contextual toolbar': 'Barra de ferramentas contextual de edição',
    'Editor editing area: %0': 'Área de edição do editor: %0',
    'Editor toolbar': 'Barra de ferramentas do editor',
    Green: 'Verde',
    Grey: 'Cinzento',
    'Header column': 'Coluna de cabeçalho',
    'Header row': 'Filha de cabeçalho',
    'Increase indent': 'Aumentar indentação',
    'Insert column left': 'Inserir coluna à esquerda',
    'Insert column right': 'Inserir coluna à direita',
    'Insert media': 'Inserir média',
    'Insert paragraph after block': 'Inserir parágrafo após o bloco',
    'Insert paragraph before block': 'Inserir parágrafo antes do bloco',
    'Insert row above': 'Inserir fila acima',
    'Insert row below': 'Inserir fila abaixo',
    'Insert table': 'Inserir tabela',
    Italic: 'Itálico',
    'Light blue': 'Azul-claro',
    'Light green': 'Verde-claro',
    'Light grey': 'Cinzento-claro',
    Link: 'Hiperligação',
    'Link URL': 'URL da ligação',
    'Media URL': 'URL de média',
    'media widget': 'widget de média',
    'Merge cell down': 'Unir célula abaixo',
    'Merge cell left': 'Unir célula à esquerda',
    'Merge cell right': 'Unir célula à direita',
    'Merge cell up': 'Unir célula acima',
    'Merge cells': 'Fundir células',
    Next: 'Seguinte',
    'Numbered List': 'Lista ordenada',
    'Open in a new tab': 'Abrir num novo separador',
    'Open link in new tab': 'Abrir link num novo separador',
    'Open media in new tab': 'Abrir ficheiro multimédia em novo separador',
    Orange: 'Laranja',
    'Paste the media URL in the input.': 'Cole o URL de média no input.',
    'Press Enter to type after or press Shift + Enter to type before the widget':
      'Prima Enter para escrever depois ou Shift + Enter para escrever antes do widget',
    Previous: 'Anterior',
    Purple: 'Roxo',
    Red: 'Vermelho',
    Redo: 'Refazer',
    'Rich Text Editor': 'Editor de texto avançado',
    Row: 'Fila',
    Save: 'Guardar',
    'Select all': 'Selecionar todos',
    'Select column': 'Selecionar coluna',
    'Select row': 'Selecionar fila',
    'Show more items': 'Mostrar mais itens',
    'Split cell horizontally': 'Dividir célula horizontalmente',
    'Split cell vertically': 'Dividir célula verticalmente',
    'Table toolbar': 'Barra de ferramentas da tabela',
    'The URL must not be empty.': 'O URL não pode estar vazio.',
    'This link has no URL': 'Este link não tem URL',
    'This media URL is not supported.': 'Este URL de média não é suportado.',
    'Tip: Paste the URL into the content to embed faster.':
      'Dica: Cole o URL no conteúdo para incorporar mais rapidamente.',
    Turquoise: 'Turquesa',
    Undo: 'Desfazer',
    Unlink: 'Desligar',
    White: 'Branco',
    'Widget toolbar': 'Barra de ferramentas do widget',
    Yellow: 'Amarelo',
  })),
    (r.getPluralForm = function (e) {
      return 0 == e || 1 == e ? 0 : 0 != e && e % 1e6 == 0 ? 1 : 2;
    });
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
