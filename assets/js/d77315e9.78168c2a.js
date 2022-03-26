"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[52772],{73468:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),l=n(76018),s=n(71871),o=n(74606),d=n(8813),c=["components"],u={title:"Create a Verifiable Credential",sidebar_label:"Create and Sign",description:"Explain how a VC is created and verified",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","Create","sign"]},h=void 0,p={unversionedId:"verifiable_credentials/create",id:"verifiable_credentials/create",title:"Create a Verifiable Credential",description:"Explain how a VC is created and verified",source:"@site/external/identity.rs/documentation/docs/verifiable_credentials/create.mdx",sourceDirName:"verifiable_credentials",slug:"/verifiable_credentials/create",permalink:"/identity.rs/verifiable_credentials/create",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/verifiable_credentials/create.mdx",tags:[],version:"current",frontMatter:{title:"Create a Verifiable Credential",sidebar_label:"Create and Sign",description:"Explain how a VC is created and verified",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","Create","sign"]},sidebar:"docs",previous:{title:"Overview",permalink:"/identity.rs/verifiable_credentials/overview"},next:{title:"Revocation",permalink:"/identity.rs/verifiable_credentials/revoke"}},m={},f=[{value:"Example",id:"example",level:2},{value:"Account Module (Recommended)",id:"account-module-recommended",level:3},{value:"Low-level API",id:"low-level-api",level:3}],v={toc:f};function y(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,i.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TODO: Explain how a VC is created and verified."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"This example shows how you can create a Verifiable Credential and validate it. In this example, Alice takes the role of the subject, while we also have an issuer.\nThe issuer signs a UniversityDegreeCredential type verifiable credential with Alice's name and DID.\nThis Verifiable Credential can be verified by anyone, allowing Alice to take control of it and share it with anyone."),(0,r.kt)("h3",{id:"account-module-recommended"},"Account Module (Recommended)"),(0,r.kt)(o.Z,{className:"language-rust",mdxType:"CodeBlock"},d.Z),(0,r.kt)("h3",{id:"low-level-api"},"Low-level API"),(0,r.kt)(l.Z,{groupId:"programming-languages",defaultValue:"rust",values:[{label:"Rust",value:"rust"},{label:"Node.js",value:"nodejs"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)(o.Z,{className:"language-rust",mdxType:"CodeBlock"},"// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! A basic example that generates and publishes subject and issuer DID\n//! Documents, then creates a Verifiable Credential (vc) specifying claims about the\n//! subject, and retrieves information through the CredentialValidator API.\n//!\n//! cargo run --example create_vc\n\nuse identity::core::ToJson;\nuse identity::credential::Credential;\nuse identity::crypto::SignatureOptions;\nuse identity::iota::CredentialValidationOptions;\nuse identity::iota::CredentialValidator;\nuse identity::iota::FailFast;\nuse identity::iota::Receipt;\nuse identity::prelude::*;\n\nmod common;\nmod create_did;\n\npub async fn create_vc() -> Result<String> {\n  // Create a DID Document/KeyPair for the credential issuer (see create_did.rs).\n  let (issuer_doc, issuer_key, _): (IotaDocument, KeyPair, Receipt) = create_did::run().await?;\n\n  // Create a DID Document/KeyPair for the credential subject (see create_did.rs).\n  let (subject_doc, _, _): (IotaDocument, KeyPair, Receipt) = create_did::run().await?;\n\n  // Create an unsigned Credential with claims about `subject` specified by `issuer`.\n  let mut credential: Credential = common::issue_degree(&issuer_doc, &subject_doc)?;\n\n  // Sign the Credential with the issuer's private key.\n  issuer_doc.sign_data(\n    &mut credential,\n    issuer_key.private(),\n    issuer_doc.default_signing_method()?.id(),\n    SignatureOptions::default(),\n  )?;\n\n  println!(\"Credential JSON > {:#}\", credential);\n\n  // Before sending this credential to the holder the issuer wants to validate that some properties\n  // of the credential satisfy their expectations.\n\n  // Validate the credential's signature using the issuer's DID Document, the credential's semantic structure,\n  // that the issuance date is not in the future and that the expiration date is not in the past:\n  CredentialValidator::validate(\n    &credential,\n    &issuer_doc,\n    &CredentialValidationOptions::default(),\n    FailFast::FirstError,\n  )?;\n\n  // The issuer is now sure that the credential they are about to issue satisfies their expectations.\n  // The credential is then serialized to JSON and transmitted to the subject in a secure manner.\n  // Note that the credential is NOT published to the IOTA Tangle. It is sent and stored off-chain.\n  let credential_json: String = credential.to_json()?;\n\n  Ok(credential_json)\n}\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  // Obtain a JSON representation of a credential issued to us\n  let _credential_json: String = create_vc().await?;\n  Ok(())\n}\n")),(0,r.kt)(s.Z,{value:"nodejs",mdxType:"TabItem"},(0,r.kt)(o.Z,{className:"language-javascript",mdxType:"CodeBlock"},'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport {\n    Credential,\n    CredentialValidationOptions,\n    CredentialValidator,\n    FailFast,\n    SignatureOptions\n} from \'@iota/identity-wasm\';\nimport {createIdentity} from \'./create_did\';\nimport {manipulateIdentity} from \'./manipulate_did\';\n\n/**\n This example shows how to create a Verifiable Credential and validate it.\n In this example, alice takes the role of the subject, while we also have an issuer.\n The issuer signs a UniversityDegreeCredential type verifiable credential with Alice\'s name and DID.\n This Verifiable Credential can be verified by anyone, allowing Alice to take control of it and share it with whomever they please.\n\n @param {{network: Network, explorer: ExplorerUrl}} clientConfig\n **/\nasync function createVC(clientConfig) {\n    // Creates new identities (See "create_did" and "manipulate_did" examples)\n    const alice = await createIdentity(clientConfig);\n    const issuer = await manipulateIdentity(clientConfig);\n\n    // Prepare a credential subject indicating the degree earned by Alice\n    let credentialSubject = {\n        id: alice.doc.id().toString(),\n        name: "Alice",\n        degreeName: "Bachelor of Science and Arts",\n        degreeType: "BachelorDegree",\n        GPA: "4.0"\n    };\n\n    // Create an unsigned `UniversityDegree` credential for Alice\n    const unsignedVc = Credential.extend({\n        id: "https://example.edu/credentials/3732",\n        type: "UniversityDegreeCredential",\n        issuer: issuer.doc.id().toString(),\n        credentialSubject,\n    });\n\n    // Sign the credential with the Issuer\'s newKey\n    const signedVc = issuer.doc.signCredential(\n        unsignedVc,\n        issuer.newKey.private(),\n        "#newKey",\n        SignatureOptions.default()\n    );\n\n    // Before sending this credential to the holder the issuer wants to validate that some properties\n    // of the credential satisfy their expectations.\n\n\n    // Validate the credential\'s signature, the credential\'s semantic structure,\n    // check that the issuance date is not in the future and that the expiration date is not in the past.\n    CredentialValidator.validate(\n        signedVc,\n        issuer.doc,\n        CredentialValidationOptions.default(),\n        FailFast.AllErrors\n    );\n\n    // Since `validate` did not throw any errors we know that the credential was successfully validated.\n    console.log(`VC successfully validated`);\n\n    // The issuer is now sure that the credential they are about to issue satisfies their expectations.\n    // The credential is then serialized to JSON and transmitted to the holder in a secure manner.\n    // Note that the credential is NOT published to the IOTA Tangle. It is sent and stored off-chain.\n    const credentialJSON = signedVc.toJSON();\n    return {alice, issuer, credentialJSON};\n}\n\nexport {createVC};\n'))))}y.isMDXComponent=!0},71871:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(67294);function a(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},76018:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(83117),a=n(67294),r=n(5730),l=n(10109),s=n(86010),o="tabItem_LplD";function d(e){var t,n,r,d=e.lazy,c=e.block,u=e.defaultValue,h=e.values,p=e.groupId,m=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(t=null!=u?u:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),w=b.tabGroupChoices,_=b.setTabGroupChoices,C=(0,a.useState)(g),D=C[0],I=C[1],k=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var S=w[p];null!=S&&S!==D&&v.some((function(e){return e.value===S}))&&I(S)}var T=function(e){var t=e.currentTarget,n=k.indexOf(t),i=v[n].value;i!==D&&(x(t),I(i),null!=p&&_(p,i))},V=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=k.indexOf(e.currentTarget)+1;n=k[i]||k[0];break;case"ArrowLeft":var a=k.indexOf(e.currentTarget)-1;n=k[a]||k[k.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},m)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return k.push(e)},onKeyDown:V,onFocus:T,onClick:T},r,{className:(0,s.Z)("tabs__item",o,null==r?void 0:r.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),d?(0,a.cloneElement)(f.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function c(e){var t=(0,r.Z)();return a.createElement(d,(0,i.Z)({key:String(t)},e))}},8813:function(e,t){t.Z='// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example account_signing\n\nuse std::path::PathBuf;\n\nuse identity::account::Account;\nuse identity::account::AccountStorage;\nuse identity::account::IdentitySetup;\nuse identity::account::Result;\nuse identity::core::json;\nuse identity::core::FromJson;\nuse identity::core::Url;\nuse identity::credential::Credential;\nuse identity::credential::Subject;\nuse identity::crypto::KeyPair;\nuse identity::crypto::SignatureOptions;\nuse identity::did::verifiable::VerifierOptions;\nuse identity::did::DID;\nuse identity::iota::ExplorerUrl;\nuse identity::iota::ResolvedIotaDocument;\nuse identity::iota_core::IotaDID;\nuse identity::prelude::*;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  pretty_env_logger::init();\n\n  // ===========================================================================\n  // Create Identity - Similar to create_did example\n  // ===========================================================================\n\n  // Stronghold settings\n  let stronghold_path: PathBuf = "./example-strong.hodl".into();\n  let password: String = "my-password".into();\n\n  // Create a new Account with stronghold storage.\n  let mut account: Account = Account::builder()\n    .storage(AccountStorage::Stronghold(stronghold_path, Some(password), None))\n    .create_identity(IdentitySetup::default())\n    .await?;\n\n  // ===========================================================================\n  // Signing Example\n  // ===========================================================================\n\n  // Add a new Ed25519 Verification Method to the identity\n  account\n    .update_identity()\n    .create_method()\n    .fragment("key-1")\n    .apply()\n    .await?;\n\n  // Create a subject DID for the recipient of a `UniversityDegree` credential.\n  let subject_key: KeyPair = KeyPair::new(KeyType::Ed25519)?;\n  let subject_did: IotaDID = IotaDID::new(subject_key.public().as_ref())?;\n\n  // Create the actual Verifiable Credential subject.\n  let subject: Subject = Subject::from_json_value(json!({\n    "id": subject_did.as_str(),\n    "degree": {\n      "type": "BachelorDegree",\n      "name": "Bachelor of Science and Arts"\n    }\n  }))?;\n\n  // Issue an unsigned Credential...\n  let mut credential: Credential = Credential::builder(Default::default())\n    .issuer(Url::parse(account.did().as_str())?)\n    .type_("UniversityDegreeCredential")\n    .subject(subject)\n    .build()?;\n\n  // ...and sign the Credential with the previously created Verification Method\n  account\n    .sign("key-1", &mut credential, SignatureOptions::default())\n    .await?;\n\n  println!("[Example] Local Credential = {:#}", credential);\n\n  // Fetch the DID Document from the Tangle\n  //\n  // This is an optional step to ensure DID Document consistency.\n  let resolved: ResolvedIotaDocument = account.resolve_identity().await?;\n\n  // Retrieve the DID from the newly created identity.\n  let iota_did: &IotaDID = account.did();\n\n  // Prints the Identity Resolver Explorer URL.\n  // The entire history can be observed on this page by clicking "Loading History".\n  let explorer: &ExplorerUrl = ExplorerUrl::mainnet();\n  println!(\n    "[Example] Explore the DID Document = {}",\n    explorer.resolver_url(iota_did)?\n  );\n\n  // Ensure the resolved DID Document can verify the credential signature\n  let verified: bool = resolved\n    .document\n    .verify_data(&credential, &VerifierOptions::default())\n    .is_ok();\n\n  println!("[Example] Credential Verified = {}", verified);\n\n  Ok(())\n}\n'}}]);