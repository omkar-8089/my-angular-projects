import { Component, DestroyRef, effect, inject, signal} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  // imports: [CommonModule],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss'
})
export class ServerStatusComponent {
  currentStatus = signal<  'online' | 'offline' | 'unknown'>('online');
  private interval!: NodeJS.Timeout;
  private destroyRef = inject(DestroyRef);

  constructor() {

    effect((onCleanup)=> {
      console.log('Signal Updated', this.currentStatus());
      onCleanup(() => {
        console.log('Cleanup called')
      })
    })

  const interval = setInterval(()=> {

        const rnd = Math.random();
        if(rnd < 0.5) {
          this.currentStatus.set('online');
        } else if (rnd < 0.9) {
          this.currentStatus.set('offline');
        } else {
          this.currentStatus.set('unknown');
        }

    }, 2000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
