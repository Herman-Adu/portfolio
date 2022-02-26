import React from "react"
import { Title } from ".."

const Experience = () => {
  return (
    <section id="experience" className="uk-section uk-section-muted">
      <div className="uk-container uk-container-center">
        <div className="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-top uk-padding-remove-bottom">
          <Title title="Experience" styleClass="underline" />
        </div>
        <ul uk-accordion="true">
          <li className="uk-open">
            <a className="uk-accordion-title" href="#">
              <p>AduDev, Start-up 2021 - current</p>
            </a>
            <div className="uk-accordion-content uk-margin-small-left uk-margin-small-right">
              <p>
                Provide IT Services for start-up companies and small to
                medium-sized businesses (SMB), helping them realise their online
                potential, utilising the latest progressive technologies to
                provide full stack web and mobile friendly sites and
                applications.
              </p>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              <p>ION Instutition Of Neurodiversity, Start-up 2021</p>
            </a>
            <div className="uk-accordion-content uk-margin-small-left uk-margin-small-right">
              <p>
                The Institute Of Neurodiversity is a non-profit global
                neurodiversity member organisation. Their goal is to bring
                together one million neurodivergent people, and their allies,
                from 100 countries.
              </p>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              <p>H&S Pepper Co, Start-up 2020 - current</p>
            </a>
            <div className="uk-accordion-content uk-margin-small-left uk-margin-small-right">
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor reprehenderit.
              </p>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              <p>Analyst Programmer Aug 2006 - Jul 2019</p>
            </a>
            <div className="uk-accordion-content uk-margin-medium-left">
              <ul uk-accordion="true">
                <li class="uk-open">
                  <a class="uk-accordion-title" href="#">
                    <p>Mobile App Development Jun 2017 - Jul 2019</p>
                  </a>
                  <div class="uk-accordion-content uk-margin-small-left uk-margin-small-right">
                    <p>
                      Part of a team responsible for, designing, writing and
                      maintaining the Manpower Life mobile application available
                      on Android and iOS platforms which allows for candidates
                      to enter CMS2 timesheets, view and edit their details,
                      view their payslips, find the nearest branch and to
                      benefit from some extras provided by the company. This
                      application contained the majority of People-Zone
                      functionalities, and was created exclusively for
                      candidates, enabling convenient access on the go. Life
                      enabled users to link their social media accounts such as
                      Facebook, LinkedIn, and Microsoft with their People-Zone
                      account and continue using social media to access the Life
                      App.
                    </p>
                    <ul>
                      <li>Visual Studio 2019, standard libraries</li>
                      <li>SQL Server for developing APIs</li>
                      <li>Visual studio 2015 for Web APIs</li>
                      <li>Xamarin Forms - MVVM pattern</li>
                      <li>Mobile UI created using C# and not XAML.</li>
                      <li>SQLite for local database in life app</li>
                      <li>NUnit- for unit testing</li>
                      <li>AutoFac - for dependency injection</li>
                      <li>AutoMapper- model – database mapping</li>
                      <li>Azure AD B2C- authentication</li>
                      <li>Azure DevOps</li>
                      <li>Octopus Deployment</li>
                      <li>
                        Mobile People-Zone Postcode Lookup Feature: Building on
                        previous projects within PC & Web, and CMS-2 Development
                        Roles, responsible for creating and implementing the new
                        postcode lookup feature, for the self-serve mobile
                        application, utilising the PAF database as its backend
                        and the MVVM implementation for candidate contact and
                        address details.
                      </li>
                      <li>
                        Mobile Manpower Extras Feature: Building on previous
                        projects within PC & Web, and CMS-2 Development Roles,
                        responsible for the creation and MVVC C# implementation
                        of the Mobile Manpower Extras feature within Life.
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a class="uk-accordion-title" href="#">
                    <p>Full-Stack Development Jan 2009 - Jun 2017</p>
                  </a>
                  <div class="uk-accordion-content uk-margin-small-left uk-margin-small-right">
                    <p>
                      Using Test Driven Development, Dependency Injection
                      Frameworks and Agile Methodologies, part of a team
                      responsible for redesigning, rewriting and maintaining
                      Manpower’s internal contract management system (CMS-2)
                      containing all job, client, agency, candidate, timesheet
                      and payslip data in alignment with the billing process.
                      Additionally, the team implemented a web based self-serve
                      application (People-Zone) for registered Manpower
                      candidates, including submission of timesheets, updating
                      personal preferences, search functionality and upload of
                      documents related to the recruitment process. Both
                      critical systems required to meet increased demands in
                      line with the future strategy of the business.
                    </p>
                    <ul>
                      <li>
                        Microsoft ASP MVC.NET, MVVMC, Razor View, C#, TSQL
                      </li>
                      <li>Web APIs - Postman</li>
                      <li>HTML, CSS, JavaScript and jQuery</li>
                      <li>NHibernate ORM</li>
                      <li>Automated unit and integration testing, MOQ.</li>
                      <li>Visual Studio Database Projects & Tests</li>
                      <li>Team Foundation Server</li>
                      <li>Octopus Deployment</li>
                      <li>
                        CMS-2 Candidate Search Functionality: Responsible for
                        implementing additional candidate search functionality
                        using C#, MVVMC NHibernate and named queries, to bring
                        our technology in-line with the top recruitment agencies
                        with a wider range of search filters for candidates.
                        including desired salary, willing to relocate,
                        proximity, etc.
                      </li>
                      <li>
                        People-Zone Postcode Lookup API: Building on previous
                        project within PC & Web Development Role, responsible
                        for implementing the self-serve postcode lookup
                        functionality within People-Zone, which enabled
                        candidates to quickly enter or update their personal
                        address. The Postcode Lookup API accessed the Royal Mail
                        PAF database and returned multiple addresses based on
                        the postcode entered, then prompted the candidate to
                        select their own address, which then populated the front
                        end with full postal address details. In addition, this
                        API was utilised for candidate’s “Nearest Manpower
                        Branches” postcode lookup.
                      </li>
                      <li>
                        Manpower Extras Rewrite: Building on previous project
                        within Web Design Role, responsible for recreation of
                        the UKI Manpower Extras (employee discounts) web
                        application written in MVC. This new version enabled the
                        application to also be accessed by all registered UK&I
                        Manpower candidates via People-Zone, whereas the
                        previous version was limited to full time employees
                        only.
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a class="uk-accordion-title" href="#">
                    <p>PC & Web Development Aug 2006 - Jan 2009</p>
                  </a>
                  <div class="uk-accordion-content uk-margin-small-left uk-margin-small-right">
                    <p>
                      Using ASP.NET, C# and SQL programming, responsible for the
                      design, writing, testing and implementation of web based
                      and Windows applications and services, to help drive
                      change and support efficiency of business functions.
                    </p>
                    <ul>
                      <li>
                        Maintain Contract Management System, which handles,
                        jobs, clients, agencies, candidates and timesheets for
                        required changes and correction of errors.
                      </li>
                      <li>
                        Maintain web based internal operational portal, which
                        facilitates some of the functionalities of CMS system
                        for required changes and correction of errors.
                      </li>
                      <li>
                        Maintain web-based client portal used by clients for
                        online issue logging, order creation and online
                        timesheets for required changes and correction of
                        errors.
                      </li>
                      <li>
                        Full project life-cycle support resource for companywide
                        stakeholders.
                      </li>
                      <li>
                        Create new programs as needed, keeping abreast of new
                        programming techniques.
                      </li>
                      <li>
                        Work independently or part of the wider team dependent
                        on scale of project.
                      </li>
                      <li>
                        Ensure all relevant documentation produced or amended as
                        required.
                      </li>
                      <li>Visual Source Safe</li>
                      <li>
                        Mail Processing Application: Utilizing ASP.NET, C# and
                        SQL initially created a web service implemented by
                        companywide applications and systems that sent several
                        thousand emails per day for business processes, saving
                        the email content into a database via an XML schema.
                        Subsequently created a Windows service that polled the
                        database and sent non expired emails via SMTP. Any email
                        not sent within 24 hours was automatically expired and a
                        dedicated team informed of the failure to send. Created
                        a further service that checked for expired emails,
                        analyzed and alerted if there was a buildup of un-sent,
                        and un-expired emails for remediation. Finally created a
                        Test-Rig to cover both web & Windows service
                        functionality testing which ultimately became a
                        diagnostic tool for the Application Support Team.
                      </li>
                      <li>
                        Royal Mail PAF Upload: A Windows application, in
                        ASP.NET, C#, and SQL, which processed a Royal Mail
                        postcode address file (PAF), creating a database that
                        held over 29 million addresses and 1.8 million UK
                        postcodes. The application allowed for back-office
                        functions to perform database maintenance on a monthly
                        basis and perform a complete annual rebuild. This
                        database was used as a one stop shop for address lookup
                        information for all business-critical systems. The
                        addition of a Test-Rig enabled efficient postcode lookup
                        testing after each database build.
                      </li>
                      <li>
                        N-Print Configurator: A role-based access control web
                        application written in ASP.NET MVC C# ENTITY FRAMEWORK,
                        created to ensure company employees were assigned into
                        the correct distribution lists, based on their
                        associated active directory group via a 3rd party
                        reporting system (QlikView). Inbound requests were
                        initially handled by IIS which authenticated the user
                        against the active directory group via an Authentication
                        Login dialog box. Once authenticated, the request was
                        forwarded to the MVC web application which validated the
                        user’s rights and roles. A user was stored as an object
                        in the Entity Framework layer which populated the user’s
                        data from the database tables.
                      </li>
                      <li>
                        Branch Structure Windows Service: Written in C# and
                        ASP.NET, transferred Branch Structure data from the
                        AS400 billing database over to the CMS database ensuring
                        the latest employee organisational structure was
                        available to our CMS system which was critical to
                        business function. N-Print Configurator also utilised
                        this service for self cleaning, automatically removing
                        employees from its own database when they exited the
                        company.
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              <p>Web Designer, Aug 2005 - Apr 2006</p>
            </a>
            <div className="uk-accordion-content uk-margin-small-left uk-margin-small-right">
              <p>
                Web Designer permanent, main duties incled Design, build and
                maintain presentation and content for Manpower UK, Manpower
                Ireland, XBC and Elan customer facing websites, intranets, and
                extranets within contract client sites, ensuring effective
                delivery and continuity of all UK&I websites externally and to
                the business units.
              </p>
              <ul>
                <li>
                  ASP, HTML, XHTML, CSS, JavaScript, FTP, Adobe, Dreamweaver,
                  Visual Studio, Fireworks, Flash, Photoshop.
                </li>
                <li>
                  Managed the development and live server environments for all
                  Manpower websites. versioning, testing and deployments.
                </li>
                <li>
                  Implementation of standards, compliance, accessibility and
                  effective change control management procedures.
                </li>
                <li>
                  Design and implementation of HTML email campaigns to meet
                  marketing objectives.
                </li>
                <li>
                  Track usage, trends and conversions via web analytic software
                  and provide analytics reporting.
                </li>
                <li>
                  Senior Leadership Team Intranet Project: Designed, built and
                  maintained, including role-based access control login limited
                  to UK&I company directors, due to the sensitive nature of the
                  data. Offering a one stop shop for cross departmental
                  leadership updates.
                </li>
                <li>
                  Manpower Extras Project: Designed, built and maintained a new
                  web application in conjunction with the marking department
                  offering discounts and vouchers across several High Street
                  brands to UK&I employees.
                </li>
                <li>
                  UK&I Website Migration: Initially implemented global styling
                  via CSS for the new company branding for the full UK&I online
                  presence, then subsequently migrated all websites to the new
                  content management system (Direct Talent CMS) including
                  handover of all related collateral and documentation to the
                  new USA based team.
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              <p>Technical Support, Jun 2004 - Aug 2005</p>
            </a>
            <div className="uk-accordion-content uk-margin-small-left uk-margin-small-right">
              <p>
                Technical Support Analyst permanent, resolving IT Helpdesk calls
                from both within Head office, and from UK-wide and European
                offices, providing technical support to first and second level
                intervention within the published SLAs, while delivering
                excellent customer service to users of the IT Technical Support.
              </p>
              <ul>
                <li>
                  Provide full and accurate call details in the IT help-desk
                  system for every call worked on.
                </li>
                <li>
                  Deliver excellent customer service to all those who contact
                  the IT Helpdesk.
                </li>
                <li>
                  Escalate PC support calls to elsewhere in the IT organisation
                  where these may not be resolved at the IT Helpdesk within the
                  company SLAs.
                </li>
                <li>
                  Inform the IT Helpdesk Manager of serious, service affecting
                  incidents or where third party organisations are failing to
                  meet their SLAs.
                </li>
                <li>
                  In house intranet based applications, Concur Expense, AS400,
                  Power Plan
                </li>
                <li>
                  Creation and management of MS Windows NT, 2000, Citrix, Dial
                  Up AT&T and Business Port user accounts.
                </li>
                <li>
                  MS Exchange 5.5 Server email boxes, distribution lists, global
                  address lists, shared calendars etc
                </li>
                <li>
                  Remote desktop support to Manpower and Elan staff across UK
                  and European offices, utilising Dameware and Citrix services
                </li>
                <li>
                  Hardware support: Xerox and IBM Printers, Faxes, and copiers
                </li>
                <li>
                  Troubleshooting DCHP, TCP/IP, Network Connections, Share
                  Permissions, Mapping drives etc
                </li>
                <li>
                  Utilise BT C View system to monitor network failure and
                  ongoing performance across UK
                </li>
                <li>Support to both Desktop PC and Laptop users</li>
              </ul>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              <p>Technical Support, May 2000 - Apr 2004</p>
            </a>
            <div className="uk-accordion-content uk-margin-small-left uk-margin-small-right">
              <p>
                Technical Support Analyst contract, for New Star Asset
                Management. I provided 1st, 2nd, 3rd Line support for London
                (Head Office), Edinburgh, Ireland, Hong Kong, and Bermuda.
              </p>
              <ul>
                <li>In-house applications, MS office 2000/XP Pro</li>
                <li>
                  Reuters and Bloomberg systems, Global Topic, DataStream,
                  Hindsight, Swift, and Standard Poor’s.
                </li>
                <li>
                  Installation and configuration of all desktop PC’s and laptops
                  using Ghost Server software.
                </li>
                <li>
                  Roll out to Windows XP Pro and Office XP Pro (setup test
                  environment for Office 2003), Created default images for
                  individual departments.
                </li>
                <li>
                  Installation and configuration of handheld devices: Palm,
                  IPaq, XDA 1, and Blackberry.
                </li>
                <li>
                  Project: Installing VPN client onto the XDA Device to access
                  corporate data and e-mails etc via exchange server 2000/3
                </li>
                <li>
                  Created and administer all new user accounts at all sites on
                  the domain with Active Directory
                </li>
                <li>
                  Setup and maintain e-mail accounts on Outlook 2000/2 and MS
                  Exchange server 2000/2003
                </li>
                <li>
                  Project: design and build a new starter form to be published
                  over the internet using Outlook tools
                </li>
                <li>Maintain telephone accounts on Definity system</li>
                <li>
                  Hardware support: Printers (Full printer maintenance for HP
                  4100 series) Faxes, and copiers
                </li>
                <li>
                  Network support: setting up network printers, mapping drives,
                  cabling and patching of all new pc’s, printers, and
                  telephones, troubleshooting DNS, DCHP, TCP/IP, share
                  permission
                </li>
                <li>
                  Support small Apple Mac environment within a large Windows
                  environment: Set up email accounts on Entourage and Outlook,
                  web access via Exchange Server, Mounting shared drives,
                  Software installation and registration. Training and induction
                  for new apple Mac users.
                </li>
                <li>
                  Backup and restore using Veritas and Backup Exec software.
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              <p>Web Designer, May 2000 - Apr 2002</p>
            </a>
            <div className="uk-accordion-content uk-margin-small-left uk-margin-small-right">
              <p>
                Web Designer contract, main duties included liaising with
                clients for their exact specifications, designing, creating,
                updating and maintaining websites, mainly within DreamWeaver,
                Fireworks & Flash (MX). Allowing them to enjoy a more
                interactive and richer media experience, and enabling
                recognition of their e-business potential.
              </p>
              <ul>
                <li>Concept Design & HTML Coding</li>
                <li>Template & Library Items Creation</li>
                <li>Layout & Graphics Design</li>
                <li>Maintenance & Upgrades</li>
                <li>Search Engine Optimisation</li>
                <li>Java Script Coding & CSS</li>
                <li>Flash Movie Design & Construction</li>
                <li>Cross Browser Compatibility Testing</li>
                <li>Analysis: HCI Heuristic Evaluation</li>
                <li>IIS 5</li>
              </ul>
            </div>
          </li>
          <li>
            <a className="uk-accordion-title" href="#">
              <p>Web Designer, Feb 1999 - Aug 2000</p>
            </a>
            <div className="uk-accordion-content uk-margin-small-left uk-margin-small-right">
              <p>
                Web Designer contract, main duties included assisting in the
                development of ColdFusion and ASP web based applications,
                utilising SQL Server 2000 in Windows 2000 Pro/XP environments.
                Worked closely with the Lead Designer as an HTML Coder on the
                AOL/CompuServe project (June to September ’2000).
              </p>
              <ul>
                <li>Concept Design & HTML Coding</li>
                <li>Java Script Coding & CSS</li>
                <li>Cross Browser Compatibility Testing</li>
                <li>Simple Interface Creation (CFML)</li>
                <li>Form Validation (CFML)</li>
                <li>Template & Layout Design (Fireworks)</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experience
