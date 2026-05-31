import html from '../../framer/agenda/schedule.html?raw';

const AgendaSchedule = () => <div dangerouslySetInnerHTML={{ __html: html }} />;

export default AgendaSchedule;
