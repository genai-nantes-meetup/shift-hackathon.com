import html from '../../framer/intervenants/team.html?raw';

const IntervenantsTeam = () => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default IntervenantsTeam;
