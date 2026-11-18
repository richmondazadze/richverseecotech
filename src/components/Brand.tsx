/** Use the Heritage web cut so the approved lettering never changes with UI fonts. */
export default function Brand({reversed=false}:{reversed?:boolean}) {
  return <img className="heritage-lockup" src={reversed ? '/brand/web-lockup-reversed.svg' : '/brand/web-lockup.svg'} width="170" height="43" alt="" />;
}
