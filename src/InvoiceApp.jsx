import { getInvoice } from "./services/getInvoice";
import { ClientDataComponent } from "./components/ClientDataComponent";
import { CompanyDataComponent } from "./components/CompanyDataComponent";
import { InvoiceComponent } from "./components/InvoiceComponent";
import { ListItemsComponent } from "./components/ListItemsComponent";

export const InvoiceApp = () => {
  const { id, name, client, company, items } = getInvoice();

  return (
    <>
      <div className="container my-3">
        <div className="card">
          <div className="card-header">
            <h1>Invoice App</h1>
          </div>
          <div className="card-body">
            <InvoiceComponent id={id} name={name} />

            <div className="row my-3">
              <div className="col">
                <ClientDataComponent title="Client" client={client} />
              </div>

              <div className="col">
                <CompanyDataComponent title="Company" company={company} />
              </div>
            </div>
            <ListItemsComponent title="Items" items={items} />
          </div>
        </div>
      </div>
    </>
  );
};
