import {configure} from "../../src/index";

class ConfigStub {

  public resources: any[];

  globalResources(...resources) {
    this.resources = resources;
  }
}

describe("the Aurelia configuration", () => {
  var mockedConfiguration;

  beforeEach(() => {
    mockedConfiguration = new ConfigStub();
    configure(mockedConfiguration);
  });

  it("should register interact draggable as global resource", () => {
    expect(mockedConfiguration.resources).toContain("./interact-draggable.ts");
  });

});
