import Icon from './Icon';
import { EMAIL, PHONE_1, PHONE_2 } from '@/lib/site';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topbar-in">
        <p>Traditional mud houses and construction across Tamil Nadu</p>
        <ul>
          <li><a href={`tel:${PHONE_1.tel}`}><Icon name="phone" /> {PHONE_1.display}</a></li>
          <li><a href={`tel:${PHONE_2.tel}`}><Icon name="phone" /> {PHONE_2.display}</a></li>
          <li><a href={`mailto:${EMAIL}`}><Icon name="mail" /> {EMAIL}</a></li>
        </ul>
      </div>
    </div>
  );
}
