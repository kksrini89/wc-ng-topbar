import {
  Component,
  VERSION,
  Renderer2,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  name = "Angular " + VERSION.major;
  @ViewChild("topBar", { static: false, read: ElementRef }) topBar: ElementRef;
  constructor(public renderer2: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.topBar) {
      const ele: HTMLElement = this.topBar.nativeElement;

      const config = {
        "bg-color": "#de6b6b"
      };

      this.renderer2.setAttribute(ele, "config", JSON.stringify(config));
      this.renderer2.setAttribute(
        ele,
        "links",
        JSON.stringify([
          { address: "#grey", anchorText: "Grey" },
          { address: "#red", anchorText: "Red" },
          { address: "#blue", anchorText: "Blue" }
        ])
      );
    }
  }
}
