import { Component, ElementRef, inject, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import * as React from 'react';
import { createRoot, Root } from 'react-dom/client';

@Component({
  standalone: true,
  template: '<div id="react-root"></div>',
})
export class ReactWrapperComponent implements OnInit, OnDestroy {
  private elm = inject(ElementRef);
  private route = inject(ActivatedRoute);
  private root: Root | null = null;

  async ngOnInit() {
    const { remote, exposedModule } = this.route.snapshot.data;
    try {
        const m = await loadRemoteModule({ remoteName: remote, exposedModule }) as any;
        const ReactComp = m.default || m.App;
        
        const container = this.elm.nativeElement.querySelector('#react-root');
        if (container) {
          this.root = createRoot(container);
          this.root.render(React.createElement(ReactComp));
        } else {
             console.error('React root container not found');
        }

    } catch (e) {
        console.error('Error loading remote', e);
        this.elm.nativeElement.innerHTML = `<h3 style="color:red">Error loading ${remote}</h3><pre>${e}</pre>`;
    }
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.unmount();
    }
  }
}
