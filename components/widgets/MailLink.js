import React from 'react'
import Mailto from 'reactv16-mailto'
import defaultMail from '../../data/defaultMail'

const MailLink = (props) => {
  let name = props.name ?? defaultMail.name
  let domain = props.domain ?? defaultMail.domain
  let tld = props.domain ?? defaultMail.tld
  let title = props.title ?? "Mail"
  let className = props.className ?? ""
  let children = props.children ?? ""

  return(
    <Mailto email={name + '@' + domain + '.' + tld} obfuscate={true} title={title} data-name={name} data-domain={domain} data-tld={tld} className={className}>{children}</Mailto>
  )
}

export default MailLink
