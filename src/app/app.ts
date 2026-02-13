import { Component, signal } from '@angular/core';
import type { WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent} from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [FormsModule, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('text-formatter');

  inputKeywords: string = '';
  outputKeywords: string = '';
  separator: string = ',';
  keywordMessage = signal('');
  private keyWordTimeout?: ReturnType<typeof setTimeout>;

  inputParagraph: string = '';
  outputParagraph: string = '';
  replaceFrom: string = '\n';
  replaceTo: string = '\\n';
  replaceMessage = signal('');
  private replaceTimeout?: ReturnType<typeof setTimeout>;

  convertString() {
    if (this.inputKeywords) {
      this.outputKeywords = `"${this.inputKeywords.split(this.separator).join('"\,"')}"`;
    } else {
      this.outputKeywords = '';
    }
  }

  replaceString() {
    if (this.inputParagraph) {
      this.outputParagraph = this.inputParagraph.replaceAll(this.replaceFrom, this.replaceTo);
    } else {
      this.outputParagraph = '';
    }
  }

  async copyToClipBoard(copyString: string, messageSignal: WritableSignal<string>) {
    try {
      await navigator.clipboard.writeText(copyString);
      messageSignal.set('copied to clipboard');
      setTimeout(() => {
        messageSignal.set('');
      }, 3000);
    } catch (error) {
      alert('error:' + error);
    }
  }

  debounceKeyword() {
    if (this.keyWordTimeout !== undefined) clearTimeout(this.keyWordTimeout);
    this.keyWordTimeout = setTimeout(() => {
      this.convertString();
    }, 1000);
  }

  debounceReplace() {
    if (this.replaceTimeout !== undefined) clearTimeout(this.replaceTimeout);
    this.replaceTimeout = setTimeout(() => {
      this.replaceString();
    }, 1000);
  }

}
