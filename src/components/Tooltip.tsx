import { Tooltip as ReactTooltip } from 'react-tooltip'

interface TooltipProps {
  anchorSelect: string
  text: string
}

export default function Tooltip({ anchorSelect, text }: TooltipProps) {
  return (
    <ReactTooltip
      anchorSelect={anchorSelect}
      content={text}
      style={{
        paddingRight: '8px',
        paddingLeft: '8px',
        paddingTop: '4px',
        paddingBottom: '4px',
        backgroundColor: 'rgb(54, 54, 54)',
        zIndex: 20,
      }}
    />
  )
}
