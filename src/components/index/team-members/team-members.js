import { TeamMember } from './team-member.js'

export const TeamMembers = ({ teamMembers, setSelectedTeamMember, toggleTeamMemberPanelVisible }) => {
  const onClickFn = (teamMember) => {
    setSelectedTeamMember(teamMember)
    toggleTeamMemberPanelVisible()
  }
  return <div className="grid w-full grid-cols-1 gap-x-4 gap-y-8 sm:w-fit sm:grid-cols-2 lg:grid-cols-3">
    {
      teamMembers.map(member => <TeamMember { ...member }
                                            key={ member.name }
                                            onClick={ () => onClickFn(member) }>{ member.image }</TeamMember>)
    }
  </div>
}