import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Nom: {{ name }}</h1>
    <p>Nova:{{ novaGroup }} Nutri:{{ nutriScore }}</p>
    <img src="{{ imageUrl }}" />
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  @Input() novaGroup: string;
  @Input() imageUrl: string;
  @Input() nutriScore: string;
}
