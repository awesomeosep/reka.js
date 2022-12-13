import * as t from '@composite/types';

export const programFromJSON = t.Schema.fromJSON(
  JSON.parse(
    '{"type":"Program", "globals": [], "components":[{"type":"CompositeComponent","name":"App","state":[{"type":"Val","name":"text","init":{"type":"Literal","start":31,"end":38,"value":"Hello","raw":"\\"Hello\\"","id":"6b27J7mNXW7FWZY61eQmpF"},"id":"aLmTBFVjLHTNsZK4YDmiDg"}],"props":[],"template":{"type":"TagTemplate","tag":"div","props":{},"children":[{"type":"TagTemplate","tag":"text","props":{"text":{"type":"Literal","start":72,"end":79,"value":"Hello","raw":"\\"Hello\\"","id":"5Ym83jy36wacocXM6vFKs7"}},"children":[],"id":"nLW1GiH6Hc9y1F5hLfCQdJ"},{"type":"TagTemplate","tag":"text","props":{"text":{"type":"Literal","start":100,"end":106,"value":"What","raw":"\\"What\\"","id":"kJkShdKsAy7dGyAoit6oAH"}},"children":[],"id":"s3BvxqtM7aAWJvd76qSfwo"},{"type":"TagTemplate","tag":"text","props":{"text":{"type":"Literal","start":127,"end":132,"value":"Bye","raw":"\\"Bye\\"","id":"hSd42UWVCv1EojFRZa2RMA"}},"children":[],"id":"qkFk5MkytWaKBiuWdooaUJ"}],"id":"pkVpzZwgdn4W5xMKErcAsp"},"id":"wgRgF7tA89D7y5SdSvYXwo"},{"type":"CompositeComponent","name":"Button","state":[{"type":"Val","name":"counter","init":{"type":"Literal","start":190,"end":191,"value":0,"raw":"0","id":"etniL9dBDR3ZiwpuAs7EEF"},"id":"5oKPduQJTDzZcR8gY1WHwg"}],"props":[{"type":"ComponentProp","name":"text","id":"6S6DDps1ExNCbMM1GWWnsk"}],"template":{"type":"TagTemplate","tag":"section","props":{},"children":[{"type":"TagTemplate","tag":"text","props":{"text":{"type":"Identifier","name":"counter","id":"4HjCY7PUJE8et9w7PyXYZA"}},"children":[],"id":"6qaV8jkgyJE4z8YTMd9K7Z"},{"type":"TagTemplate","tag":"button","props":{"onClick":{"type":"Func","params":[],"body":{"type":"Block","statements":[{"type":"Assignment","left":{"type":"Identifier","name":"counter","id":"at1g9bh4sqfTzp8iz73vg7"},"operator":"+=","right":{"type":"Literal","start":280,"end":281,"value":1,"raw":"1","id":"kANr7uwgSvqkXcqtJhFHGz"},"id":"nTXFK27Cpjxc1n2d9gkcZn"}],"id":"1oyTchxTHtHYgGsAstUmrA"},"id":"3BhfsSpmJX4EyzKXj683mD"}},"children":[{"type":"TagTemplate","tag":"text","props":{"text":{"type":"Literal","start":305,"end":316,"value":"Increment","raw":"\\"Increment\\"","id":"fP5N6X79nY7RFtQWQ5aF5x"}},"children":[],"id":"rNgwb8VMMLfDN4j5BxdVbK"}],"id":"jrz8nd2jz5H9dpzKP6NpCt"}],"id":"2y1q4hVGWZ7F4zHTnMr6yu"},"id":"79GbtuCBFftgb24ib3TAqB"}],"id":"h3Ci3vV5r5JzQEDYWsWpqt"}'
  )
);
export * from './dummy-program';
export * from './encoded-dummy-program';
export * from './shared-state-globals';
export * from './yjs';
