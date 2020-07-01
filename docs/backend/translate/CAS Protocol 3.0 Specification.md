# CAS Protocol 3.0 Specification

Authors, Version

Author: Drew Mazurek

Contributors:

- Susan Bramhall
- Howard Gilbert


Version: 3.0.2

Release Date: 2015-01-13

Copyright © 2005, Yale University


Copyright © 2015, Apereo, Inc.



![图](https://apereo.github.io/cas/4.2.x/images/cas_flow_diagram.png)

## 1. Introduction

This is the official specification of the CAS 1.0, 2.0 and 3.0 protocols.

The Central Authentication Service (CAS) is a single-sign-on / single-sign-off protocol for the web. It permits a user to access multiple applications while providing their credentials (such as userid and password) only once to a central CAS Server application.

### 1.1. Conventions & Definitions

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in RFC 21191.

- `Client` refers to the end user and/or the web browser.

- `“CAS Client”` refers to the software component that is integrated with a web application and interacts with the CAS server via CAS protocol.

- `“Server”` refers to the Central Authentication Service server.

- `“Service”` refers to the application the client is trying to access.

- `“Back-end service”` refers to the application a service is trying to access on behalf of a client. This can also be referred to as the “target service.”

- `“SSO”` refers to Single Sign on.

- `“SLO”` refers to Single Logout.

- `”<LF>”` is a bare line feed (ASCII value 0x0a).

### 1.2 Reference Implementation

The Apereo CAS-Server[8](http://www.apereo.org/cas) is the official reference implementation of the CAS Protocol Specification.

Apereo CAS Server 4.x supports the CAS Protocol 3.0 Specification.

## 2. CAS URIs

CAS is an HTTP[2](),[3]()-based protocol that requires each of its components to be accessible through specific URIs. This section will discuss each of the URIs:

|  URI   | Description  |
|  ----  | ----  |
| `/login`  | credential requestor / acceptor |
| `/logout`  | destroy CAS session (logout) |
| `/validate`  | service ticket validation |
| `/serviceValidate`  | service ticket validation [CAS 2.0] |
| `/proxyValidate`  | service/proxy ticket validation [CAS 2.0] |
| `/proxy`  | proxy ticket service [CAS 2.0] |
| `/p3/serviceValidate`  | service ticket validation [CAS 3.0] |
| `/p3/proxyValidate`  | service/proxy ticket validation [CAS 3.0] |

### 2.1. `/login` as credential requestor

The `/login` URI operates with two behaviors: as a credential requestor, and as a credential acceptor. It responds to credentials by acting as a credential acceptor and otherwise acts as a credential requestor.

If the client has already established a single sign-on session with CAS, the web browser presents to CAS a secure cookie containing a string identifying a ticket-granting ticket. This cookie is called the ticket-granting cookie. If the ticket-granting cookie keys to a valid ticket-granting ticket, CAS MAY issue a service ticket provided all the other conditions in this specification are met. See Section [3.6](3.6) for more information on ticket-granting cookies.

#### 2.1.1. parameters

The following HTTP request parameters may be passed to `/login` while it is acting as a credential requestor. They are all case-sensitive, and they all MUST be handled by `/login`.

- `service` [OPTIONAL] - the identifier of the application the client is trying to access. In almost all cases, this will be the URL of the application. As a HTTP request parameter, this URL value MUST be URL-encoded as described in section 2.2 of RFC 3986 [4]. If a `service` is not specified and a single sign-on session does not yet exist, CAS SHOULD request credentials from the user to initiate a single sign-on session. If a `service` is not specified and a single sign-on session already exists, CAS SHOULD display a message notifying the client that it is already logged in.

::: tip Note:
 It is STRONGLY RECOMMENDED that all `service` urls be filtered via the service management tool, such that only authorized and known client applications would be able to use the CAS server. Leaving the service management tool open to allow lenient access to all applications will potentially increase the risk of service attacks and other security vulnerabilities. Furthermore, it is RECOMMENDED that only secure protocols such as `https` be allowed for client applications for further strengthen the authenticating client.
:::

- renew [OPTIONAL] - if this parameter is set, single sign-on will be bypassed. In this case, CAS will require the client to present credentials regardless of the existence of a single sign-on session with CAS. This parameter is not compatible with the gateway parameter. Services redirecting to the /login URI and login form views posting to the /login URI SHOULD NOT set both the renew and gateway request parameters. Behavior is undefined if both are set. It is RECOMMENDED that CAS implementations ignore the gateway parameter if renew is set. It is RECOMMENDED that when the renew parameter is set its value be “true”.

- gateway [OPTIONAL] - if this parameter is set, CAS will not ask the client for credentials. If the client has a pre-existing single sign-on session with CAS, or if a single sign-on session can be established through non-interactive means (i.e. trust authentication), CAS MAY redirect the client to the URL specified by the service parameter, appending a valid service ticket. (CAS also MAY interpose an advisory page informing the client that a CAS authentication has taken place.) If the client does not have a single sign-on session with CAS, and a non-interactive authentication cannot be established, CAS MUST redirect the client to the URL specified by the service parameter with no “ticket” parameter appended to the URL. If the service parameter is not specified and gateway is set, the behavior of CAS is undefined. It is RECOMMENDED that in this case, CAS request credentials as if neither parameter was specified. This parameter is not compatible with the renew parameter. Behavior is undefined if both are set. It is RECOMMENDED that when the gateway parameter is set its value be “true”.

- method [OPTIONAL, CAS 3.0] - The method to be used when sending responses. While native HTTP redirects (GET) may be utilized as the default method, applications that require a POST response can use this parameter to indicate the method type. It is up to the CAS server implementation to determine whether or not POST responses are supported.

#### 2.1.2. URL examples of `/login`

Simple login example:

```
https://cas.example.org/cas/login?service=http%3A%2F%2Fwww.example.org%2Fservice
```

Don’t prompt for username/password:

```
https://cas.example.org/cas/login?service=http%3A%2F%2Fwww.example.org%2Fservice&gateway=true
```

Always prompt for username/password:

```
https://cas.example.org/cas/login?service=http%3A%2F%2Fwww.example.org%2Fservice&renew=true
```

Use POST responses instead of redirects:

```
https://cas.example.org/cas/login?method=POST&service=http%3A%2F%2Fwww.example.org%2Fservice
```

#### 2.1.3. response for username/password authentication

When /login behaves as a credential requestor, the response will vary depending on the type of credentials it is requesting. In most cases, CAS will respond by displaying a login screen requesting a username and password. This page MUST include a form with the parameters, “username”, “password”, and “lt”. The form MAY also include the parameter “warn”. If service was specified to /login, service MUST also be a parameter of the form, containing the value originally passed to /login. These parameters are discussed in detail in Section 2.2.1. The form MUST be submitted through the HTTP POST method to /login which will then act as a credential acceptor, discussed in Section 2.2.

#### 2.1.4. response for trust authentication

Trust authentication accommodates consideration of arbitrary aspects of the request as a basis for authentication. The appropriate user experience for trust authentication will be highly deployer-specific in consideration of local policy and of the logistics of the particular authentication mechanism implemented.

When /login behaves as a credential requestor for trust authentication, its behavior will be determined by the type of credentials it will be receiving. If the credentials are valid, CAS MAY transparently redirect the user to the service. Alternately, CAS MAY display a warning that credentials were presented and allow the client to confirm that it wants to use those credentials. It is RECOMMENDED that CAS implementations allow the deployer to choose the preferred behavior. If the credentials are invalid or non-existent, it is RECOMMENDED that CAS displays to the client the reason why authentication failed, and possibly present the user with alternate means of authentication (e.g. username/password authentication).

#### 2.1.5. response for single sign-on authentication

If the client has already established a single sign-on session with CAS, the client will have presented its HTTP session cookie to /login and behavior will be handled as in Section 2.2.4. However, if the renew parameter is set, the behavior will be handled as in Section 2.1.3 or 2.1.4.

### 2.2. `/login` as credential acceptor

## 3. CAS Entities

## 4. Optional Features

## Appendix A: CAS response XML schema

## Appendix B: Safe redirection

## Appendix C: Logout XML document

## Appendix D: References

## Appendix E: CAS License

## Appendix F: YALE License

