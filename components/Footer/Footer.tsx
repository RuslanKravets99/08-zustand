import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Ruslan Kravets</p>
          <p>
            Contact us:
            <a href="mailto:rus.kravets.9928@gmail.com" target='_blank'>rus.kravets.928@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}