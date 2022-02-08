import { Button } from './Button';

import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar(props: { genres: GenreResponseProps[]; handleClickButton: (arg0: number) => void; selectedGenreId: number; }) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map((genre: GenreResponseProps) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}

// function genre(genre: any): import("react").ReactNode {
//   throw new Error('Function not implemented.');
// }


// function handleClickButton(id: any): void {
//   throw new Error('Function not implemented.');
// }
