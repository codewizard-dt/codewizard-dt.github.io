import { useState } from "react"
import { Form, Label } from "semantic-ui-react"
import './CheckboxLabel.sass'

const CheckboxLabel = ({ name, content, detail, onClick = () => { }, initial, className = '' }) => {
  const [checked, setChecked] = useState(initial || false)
  const handleClick = (e) => {
    e.stopPropagation()
    setChecked(!checked)
    onClick({ [name]: !checked })
  }
  let classNames = ['checkbox-label', ...className.split('')]
  if (checked) classNames.push('checked')
  return (
    <Label className={classNames.join(' ')} onClick={handleClick}>
      <Form.Input type='checkbox' control="input" checked={checked} onChange={handleClick} />
      <div className="content">{content}</div>
      {detail && <Label.Detail content={detail} />}
    </Label>
  )
}

export default CheckboxLabel