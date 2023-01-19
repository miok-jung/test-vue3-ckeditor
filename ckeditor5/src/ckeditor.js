/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical'; // tinymce에서 Quotations + Mathematical합친것
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';

class ClassicEditor extends ClassicEditorBase {}
class InlineEditor extends InlineEditorBase {}

// Symbol 특수문자
function SpecialCharactersSymbol(editor) {
  editor.plugins.get('SpecialCharacters').addItems('Symbol', [
    { title: 'alef symbol', character: 'ℵ' },
    { title: 'pi symbol', character: 'ϖ' },
    { title: 'real part symbol', character: 'ℜ' },
    { title: 'upsilon hook symbol', character: 'ϒ' },
    { title: 'Weierstrass p', character: '℘' },
    { title: 'imaginary part', character: 'ℑ' },
  ]);
}
// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  Autoformat,
  CloudServices,
  Essentials,
  Indent,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TextTransformation,
];
InlineEditor.builtinPlugins = [
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  SpecialCharacters,
  SpecialCharactersEssentials,
  SpecialCharactersCurrency,
  SpecialCharactersText,
  SpecialCharactersMathematical,
  SpecialCharactersLatin,
  SpecialCharactersSymbol,
  SpecialCharactersArrows,
];
// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'undo',
      'redo',
      '|',
      'bold',
      'italic',
      '|',
      'bulletedList',
      'numberedList',
      'outdent',
      'indent',
      '|',
      'link',
      'insertTable',
      'mediaEmbed',
    ],
  },
  language: 'ko',
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
  },
};
InlineEditor.defaultConfig = {
  toolbar: {
    items: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'subscript',
      'superscript',
      'specialCharacters',
    ],
    language: 'ko',
  },
};
export default { ClassicEditor, InlineEditor };
