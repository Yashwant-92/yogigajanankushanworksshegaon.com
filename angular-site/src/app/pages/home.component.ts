import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

interface Product {
  id: string;
  name: string;
  image: string;
  href: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  featuredCollections: Collection[] = [
    {
      id: 'minimal-luxe',
      name: 'Minimal Luxe',
      description: 'Understated silhouettes in premium materials.',
      image:
        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
    {
      id: 'urban-nomad',
      name: 'Urban Nomad',
      description: 'Versatile layers designed for movement.',
      image:
        'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
    {
      id: 'solstice',
      name: 'Solstice',
      description: 'Warm textures meeting clean modern lines.',
      image:
        'https://images.unsplash.com/photo-1615870216515-6b30c0762735?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
  ];

  couchProducts: Product[] = [
    {
      id: 'sofa-1',
      name: 'Arlo Modular Sofa',
      image:
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
    {
      id: 'sofa-2',
      name: 'Noir Linen Couch',
      image:
        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
    {
      id: 'sofa-3',
      name: 'Sable Corner Sectional',
      image:
        'https://images.unsplash.com/photo-1472220625704-91e1462799b2?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
    {
      id: 'sofa-4',
      name: 'CloudSoft Loveseat',
      image:
        'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
    {
      id: 'sofa-5',
      name: 'Sage Bouclé Sofa',
      image:
        'https://images.unsplash.com/photo-1615870216515-6b30c0762735?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
    {
      id: 'sofa-6',
      name: 'Oak Frame Daybed',
      image:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
      href: '#',
    },
  ];
}
