import {configure} from "../../src/index";
import { Container } from 'aurelia-framework';

class ConfigStub {

  public resources: any[];
  public container = new Container();

  globalResources(resources) {
    this.resources = resources;
  }
}

describe("the Aurelia configuration", () => {
  var mockedConfiguration;

  beforeEach(() => {
    mockedConfiguration = new ConfigStub();
    configure(mockedConfiguration, undefined);
  });

  it("should register interact draggable as global resource", () => {
    expect(mockedConfiguration.resources).toContain("./interact-draggable");
  });
});
